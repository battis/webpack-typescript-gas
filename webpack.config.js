const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { allowTsInNodeModules: true },
      },
    ],
  },
  plugins: [new GasPlugin()],
};
