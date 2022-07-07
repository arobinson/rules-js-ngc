import * as path from 'path';
import babel from 'esbuild-plugin-babel';
import { ConsoleLogger, NodeJSFileSystem, LogLevel } from '@angular/compiler-cli';
import { createEs2015LinkerPlugin } from '@angular/compiler-cli/linker/babel';

/** File system used by the Angular linker plugin. */
const fileSystem = new NodeJSFileSystem();
/** Logger used by the Angular linker plugin. */
const logger = new ConsoleLogger(LogLevel.info);
/** Linker babel plugin. */
const linkerPlugin = createEs2015LinkerPlugin({
  fileSystem,
  logger,
  linkerJitMode: false
});

/**
 * Setup a plugin to resolve the modules from the Typescript `paths` to relative imports for esbuild to find
 */
const libOnResolvePlugin = {
  name: 'library-resolve-plugin',
  setup(build) {
    // Redirect all paths with "lib-shared"
    build.onResolve({ filter: /^lib-shared$/ }, (args) => {
      const fromPath = args.resolveDir;
      let destPath = [];
      for (let p = fromPath; p; p = path.dirname(p)) {
        if (path.basename(p) === 'src') {
          break;
        }
        destPath.push('..');
      }

      destPath.push('lib-shared', 'public-api.js');

      return { path: path.join(args.resolveDir, ...destPath) };
    });
  }
};

export default {
  plugins: [
    libOnResolvePlugin,
    babel({
      filter: /.*/,
      namespace: '',
      config: {
        sourceMaps: true,
        plugins: [linkerPlugin]
      }
    })
  ]
};
