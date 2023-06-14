# This package contains the build rule to build ace editor api as if it were part of elemental2

load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")

package(
    default_visibility = [
        "//:__subpackages__",
    ],
    # Apache2
    licenses = ["notice"],
)

jsinterop_generator(
    name = "wasm",
    srcs = ["j2wasm.js"],
    extension_type_prefix = "wasm",
    j2cl_js_deps = [],
    deps = [
        "//third_party:elemental2-webassembly",
        "//third_party:elemental2-promise",
    ],
)
