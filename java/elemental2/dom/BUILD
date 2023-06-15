# This package contains the build rule to build elemental2-dom.
load("@com_google_jsinterop_generator//:jsinterop_generator.bzl", "jsinterop_generator")

package(
    default_visibility = [
        "//:__subpackages__",
    ],
    # Apache2
    licenses = ["notice"],
)

java_library(
    name = "EventListenerCleaner",
    srcs = ["EventListenerCleaner.java"],
    visibility = ["//visibility:public"],
    runtime_deps = ["@com_google_jsinterop_generator//java/jsinterop/generator/model"],
    deps = [
        "//third_party:guava",
        "@com_google_jsinterop_generator//java/jsinterop/generator/model",
    ],
)
