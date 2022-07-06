"""
General rules
"""

def _get_directories(ctx):
    directories = []
    for f in ctx.attr.srcs.files.to_list():
        if f.is_directory:
            directories.append(f)
    
    return [
        DefaultInfo(files = depset(directories))
    ]

# Given a set of files, only return those that are directories
get_directories = rule(
    _get_directories,
    attrs = {
        "srcs": attr.label(providers = [DefaultInfo]),       
        "deps": attr.label_list(providers = [DefaultInfo]), 
    },
)
