const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: inline-source-map,
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      title: 'Hot Module Replacement',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
	  'style-loader',
	  'css-loader'
	],
      },
      {
	test: /\.(png|svg|jpg|jpeg|gif)$/i,
	use: [
	  'file-loader',
	  'image-webpack',
	],
      },
    ],
  },
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: './dist',
    hot: true,
  },
};
