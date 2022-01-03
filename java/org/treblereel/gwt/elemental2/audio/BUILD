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

patch_extern_file(
    name = "audio_patched",
    src = "//third_party:w3c_audio.js",
    patch_file = "w3c_audio.patch"
)

jsinterop_generator(
    name = "audio",
    srcs = ["audio_patched.js"],
    extension_type_prefix = "audio",
    j2cl_js_deps = [],
    deps = [
        "//third_party:elemental2-core",
        "//third_party:elemental2-dom",
    ],
)
