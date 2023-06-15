workspace(name = "org_treblereel_gwt_elemental2_experimental")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Load J2CL separately
_J2CL_VERSION = "master"

http_archive(
    name = "com_google_j2cl",
    strip_prefix = "j2cl-%s" % _J2CL_VERSION,
    url = "https://github.com/google/j2cl/archive/%s.zip" % _J2CL_VERSION,
)

load("@com_google_j2cl//build_defs:repository.bzl", "load_j2cl_repo_deps")

load_j2cl_repo_deps()

load("@com_google_j2cl//build_defs:workspace.bzl", "setup_j2cl_workspace")

setup_j2cl_workspace()

_JSINTEROP_GENERATOR_VERSION = "master"

http_archive(
    name = "com_google_jsinterop_generator",
    url = "https://github.com/google/jsinterop-generator/archive/%s.zip" % _JSINTEROP_GENERATOR_VERSION,
    strip_prefix = "jsinterop-generator-%s" % _JSINTEROP_GENERATOR_VERSION,
)

http_archive(
    name = "org_gwtproject_gwt",
    strip_prefix = "gwt-073679594c6ead7abe501009f8ba31eb390047fc",
    url = "https://github.com/gwtproject/gwt/archive/073679594c6ead7abe501009f8ba31eb390047fc.zip",
    sha256 = "731879b8e56024a34f36b83655975a474e1ac1dffdfe72724e337976ac0e1749",
)


# Load other dependencies
load("@com_google_jsinterop_generator//build_defs:rules.bzl", "setup_jsinterop_generator_workspace")
load("@com_google_jsinterop_generator//build_defs:repository.bzl", "load_jsinterop_generator_repo_deps")

load_jsinterop_generator_repo_deps()
setup_jsinterop_generator_workspace()

http_archive(
    name = "com_google_elemental2",
    strip_prefix = "elemental2-1.1.0",
    url = "https://github.com/google/elemental2/archive/1.1.0.zip",
)


# We're _not_ sharing this rule from elemenetal2, we want to change the externs glob
load("//build_defs:repository.bzl", "load_elemental2_repo_deps")

load_elemental2_repo_deps()

load("@com_google_elemental2//build_defs:workspace.bzl", "setup_elemental2_workspace")

setup_elemental2_workspace()
