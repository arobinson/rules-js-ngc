# Install

```
git checkout relativePathIssue
cd angular-app
pnpm i
```

# Reproduce issue

(Note that I have @bazel/bazelisk@1.11.0 installed globally via npm)
```
bazelisk build //angular-app/src/app/mega-menu
```

```
(15:04:06) INFO: Current date is 2022-06-28
(15:04:06) INFO: Analyzed target //angular-app/src/app/mega-menu:mega-menu (1 packages loaded, 5 targets configured).
(15:04:06) INFO: Found 1 target...
(15:04:12) ERROR: /Users/andrew/development/work/client/rules-js-ngc/angular-app/src/app/mega-menu/BUILD.bazel:9:18: Compiling TypeScript project //angular-app/src/app/mega-menu:mega-menu [tsc -p angular-app/src/app/tsconfig.json] failed: (Exit 1): ngc.sh failed: error executing command bazel-out/darwin-opt-exec-2B5CBBC6/bin/angular-app/ngc.sh --project angular-app/src/app/tsconfig.json --outDir angular-app/src/app/mega-menu --rootDir angular-app/src/app/mega-menu --declarationDir ... (remaining 1 argument skipped)

Use --sandbox_debug to see verbose messages from the sandbox
mega-menu/nw-mega-menu.module.ts:7:27 - error NG3004: Unable to import class SharedModule.
  The file /Users/andrew/.cache/bazel/f355b5a713f2f1fa25bb9ca98af4bac6/sandbox/darwin-sandbox/145/execroot/nw-bazel-poc/bazel-out/darwin-fastbuild/bin/angular-app/src/app/shared/shared.module.d.ts is outside of the configured 'rootDir'.

7   imports: [RouterModule, SharedModule],
                            ~~~~~~~~~~~~

  shared/shared.module.d.ts:9:1
      9 export declare class SharedModule {
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     10     static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...
     12     static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     13 }
        ~
    The class is declared here.
mega-menu/nw-mega-menu.component.html:5:1 - error NG8001: 'nw-button' is not a known element:
1. If 'nw-button' is an Angular component, then verify that it is part of this module.
2. If 'nw-button' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

5 <nw-button></nw-button>
  ~~~~~~~~~~~

  mega-menu/nw-mega-menu.component.ts:5:16
    5   templateUrl: './nw-mega-menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NwMegaMenuComponent.

Target //angular-app/src/app/mega-menu:mega-menu failed to build
Use --verbose_failures to see the command lines of failed build steps.
(15:04:12) INFO: Elapsed time: 6.384s, Critical Path: 5.94s
(15:04:12) INFO: 2 processes: 2 internal.
(15:04:12) FAILED: Build did NOT complete successfully
```

# Test with TSC

It works when using `tsc` instead of `ngc`:

1. Open `angular-app/src/BUILD.bazel`
2. Comment out the `ng_app_ts_project` rule
3. Un-comment the `ts_project` rule
4. Run `bazelisk build //angular-app/src/app/mega-menu` again, this time it works

```
(15:04:28) INFO: Current date is 2022-06-28
(15:04:29) INFO: Analyzed target //angular-app/src/app/mega-menu:mega-menu (1 packages loaded, 3 targets configured).
(15:04:29) INFO: Found 1 target...
Target //angular-app/src/app/mega-menu:mega-menu up-to-date:
  bazel-bin/angular-app/src/app/mega-menu/nw-mega-menu.module.js
  bazel-bin/angular-app/src/app/mega-menu/nw-mega-menu.component.js
  bazel-bin/angular-app/src/app/mega-menu/nw-mega-menu.module.js.map
  bazel-bin/angular-app/src/app/mega-menu/nw-mega-menu.component.js.map
(15:04:31) INFO: Elapsed time: 2.422s, Critical Path: 2.00s
(15:04:31) INFO: 2 processes: 1 internal, 1 worker.
(15:04:31) INFO: Build completed successfully, 2 total actions
```