#!/usr/bin/env bash
# Inspired by elemental2's release_elemental2.sh script, this script unpacks
# the generated sources, appends a license header, and sets it up to be built,
# deployed by maven. The main advantage over the existing script is that it
# doesn't use j2cl's maven/deploy.sh, which hardcodes the repositoryId, url,
# use of GPG for deployment (sonatype snapshots doesn't require this), and
# also re-generates bytecode to match source code (just in case that were
# to matter). Additionally, this approach lets us ensure that maven plugins
# like net.ltgt.gwt.maven:gwt-maven-plugin to conform to expectations of
# downstream users.

# Fail on any error
set -e

# Let some env var define the specific bazel version to use, or look on the PATH if none is set
BAZEL=${BAZEL:-bazel}

# Get the parent dir of this script
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

modules=(
      audio
      clipboard
      pointerlock
      #filesystem
      gamepad
      proxy
      resizeobserver
      permissions
      webxr
      webgpu
      webshare
     )

BAZEL_ARTIFACT_PATH=${DIR}/bazel-bin/java/org/treblereel/gwt/elemental2/
MAVEN_DIR_PATH=${DIR}/maven/
MAVEN_JAVA_SRC=/src/main/java

LICENSE_HEADER=${DIR}/maven/license.txt

# Bazel on circleci dies a lot, allow for retries if set
ATTEMPTS=${ATTEMPTS:-1}

# Allow failures for this part
set +e

for Item in ${modules[*]}
  do
    # Current try is "zero"
    i=0

    # Indicate that we should try at least once
    RESULT=1


    while [[ ${RESULT} -ne 0 && ${i} -lt ${ATTEMPTS} ]]
    do
      i=$(($i+1))
      # Invoke Bazel to produce the sources that we need
      ${BAZEL} build //java/org/treblereel/gwt/elemental2/$Item:lib$Item-src.jar

      # Track the result
      RESULT=$?
    done

    # Reinstate "stop on failure"
    set -e

    # If last attempt was a failure, give up
    if [[ ${RESULT} -ne 0 ]]
    then
        echo "Failed after ${ATTEMPTS} retries"
        exit 1
    fi

    # Copy generated java sources into maven source dir, apply license header
    cd ${MAVEN_DIR_PATH}$Item${MAVEN_JAVA_SRC}
    jar xf ${BAZEL_ARTIFACT_PATH}$Item/lib$Item-src.jar
    cd -

    tmp_file=$(mktemp)
    for java in $(find ${MAVEN_DIR_PATH}$Item${MAVEN_JAVA_SRC} -name '*.java'); do
        cat  ${LICENSE_HEADER} ${java} > ${tmp_file}
        mv ${tmp_file} ${java}
    done

    rm ${MAVEN_DIR_PATH}$Item${MAVEN_JAVA_SRC}/META-INF/MANIFEST.MF
  done






# Maven can now be invoked by hand, installing locally, deploying to its snapshot/staging repo