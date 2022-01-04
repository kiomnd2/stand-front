module.exports = {
  plugins: ['@babel/plugin-proposal-optional-chaining'],
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          browsers: ['> 0.25%', 'not ie 11', 'not op_mini all'],
        },
      },
    ],
  ],
};
