const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { tanstackRouter } = require('@tanstack/router-plugin/webpack');
const deps = require('./package.json').dependencies;

const remoteUrl = process.env.REMOTE_URL || 'http://localhost:3001';
module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { transpileOnly: true },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    tanstackRouter({ target: 'react' }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote: `remote@${remoteUrl}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
      dts: {
        generateTypes: false,
        consumeTypes: true,
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
