import * as path from 'path';
import babel from 'esbuild-plugin-babel';

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
      namespace: ''
    })
  ]
};
