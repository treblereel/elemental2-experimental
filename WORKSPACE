workspace(name = "org_treblereel_gwt_elemental2_pointerlock")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Load J2CL, we don't get it from elemental2 or jsinterop-base
_J2CL_VERSION = "master"

http_archive(
    name = "com_google_j2cl",
    strip_prefix = "j2cl-%s" % _J2CL_VERSION,
    url = "https://github.com/google/j2cl/archive/%s.zip" % _J2CL_VERSION,
)

load("@com_google_j2cl//build_defs:repository.bzl", "load_j2cl_repo_deps")

load_j2cl_repo_deps()

load("@com_google_j2cl//build_defs:rules.bzl", "setup_j2cl_workspace")

setup_j2cl_workspace()

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
