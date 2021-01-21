# Description:
#    Exported build rule for ace editor api for gwt/j2cl
#

load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")

package(
    default_visibility = ["//visibility:public"],
    # Apache2
    licenses = ["notice"],
)

exports_files(["LICENSE"])

jsinterop_generator(
    name = "elemental2-experimental",
    exports = ["//java/org/treblereel/gwt/elemental2/pointerlock:pointerlock",
    "//java/org/treblereel/gwt/elemental2/filesystem:filesystem",
    "//java/org/treblereel/gwt/elemental2/gamepad:gamepad"
    ],
)
