# This package contains the build rule to build ace editor api as if it were part of elemental2

load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")

package(
    default_visibility = [
        "//:__subpackages__",
    ],
    # Apache2
    licenses = ["notice"],
)

filegroup(
    name = "clipboard_files",
    srcs = [
        "@com_google_closure_compiler//:externs/browser/w3c_clipboardevent.js",
        "@com_google_closure_compiler//:externs/browser/w3c_clipboard.js",
    ],
)
jsinterop_generator(
    name = "clipboard",
    srcs = [":clipboard_files"],
    extension_type_prefix = "Clipboard",
    j2cl_js_deps = [],
    deps = [
        "//third_party:elemental2-core",
        "//third_party:elemental2-dom",
    ],
)
