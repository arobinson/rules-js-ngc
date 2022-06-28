import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';
import { addCommonConfiguration, setupLocalGeneration, applyNamedPlugins } from './tools/webpack-utils';
// Use this import when using the applySpeedMeasurePlugin
// import { applySpeedMeasurePlugin } from './webpack-utils';

// For the AngularCLI implementation and extend what they do, see:
// https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_angular/src/webpack/configs/browser.ts
export default (
  config: webpack.Configuration,
  _options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
): webpack.Configuration => {
  addCommonConfiguration(config);
  setupLocalGeneration(config);
  applyNamedPlugins(config);

  // Uncomment to get performance numbers (it will break the build but it will provide numbers)
  // config = applySpeedMeasurePlugin(config);

  if (targetOptions.target === 'serve') {
    config.cache = {
      type: 'memory',
      maxGenerations: 1
    };
  }

  return config;
};
