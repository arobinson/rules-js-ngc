"Shows how to use ts_project(tsc=ngc) to make a drop-in replacement for ng_module/ts_library(use_angular_plugin)"

load("//angular-app/tools:typescript.bzl", "ts_project")

def ng_app_ts_project(name, tsconfig = "//angular-app:tsconfig", srcs = [], deps = [], angular_assets = [], **kwargs):
    ts_project(
        name = name,
        tsconfig = tsconfig,
        tsc = "//angular-app:ngc",
        srcs = srcs + angular_assets,
        deps = deps,
        extends = "//angular-app:tsconfig",
        supports_workers = False,
        **kwargs
    )

def ng_shared_ts_project(name, tsconfig = "//angular-app/src/lib-shared:tsconfig", srcs = [], angular_assets = [], **kwargs):
    ts_project(
        name = name,
        tsconfig = tsconfig,
        tsc = "//angular-app:ngc",
        srcs = srcs + angular_assets,
        extends = "//angular-app:tsconfig",
        supports_workers = False,
        **kwargs
    )

