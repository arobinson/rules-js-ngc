"""Helper macros for compiling typescript with consistent config"""

load("@aspect_rules_ts//ts:defs.bzl", _ts_project = "ts_project")

def ts_project(name, **kwargs):
    _ts_project(
        name = name,
        declaration = True,
        declaration_map = True,
        source_map = True,
        validate = False,
        resolve_json_module = True,
        **kwargs
    )
