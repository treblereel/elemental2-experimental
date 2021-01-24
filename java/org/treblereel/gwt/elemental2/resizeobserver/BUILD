# This package contains the build rule to build ace editor api as if it were part of elemental2

load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")
load(
    "//build_defs/internal_do_not_use:elemental_utils.bzl",
    "patch_extern_file",
)

package(
    default_visibility = [
        "//:__subpackages__",
    ],
    # Apache2
    licenses = ["notice"],
)

jsinterop_generator(
    name = "resizeobserver",
    srcs = ["//third_party:wicg_resizeobserver.js"],
    # override auto generated js_deps in order not to provide extern files
    # Common extern file are included by default.
    j2cl_js_deps = [],
    deps = [
        "//third_party:elemental2-core",
        "//third_party:elemental2-dom",
    ],
)
