const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("svg");

config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => !config.resolver.sourceExts.includes(ext)
);

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

module.exports = config;
