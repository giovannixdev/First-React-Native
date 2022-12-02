module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ///This Plugin should be last
      'react-native-reanimated/plugin',
    ],
  };
};
