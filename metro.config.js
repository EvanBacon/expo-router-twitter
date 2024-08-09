const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, '/Users/saulamsal/Files/www/expo/packages/expo-router')
];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '/Users/saulamsal/Files/www/expo/packages/expo-router'),
];

config.resolver.sourceExts.push("svg");

config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => !config.resolver.sourceExts.includes(ext)
);

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

module.exports = config;