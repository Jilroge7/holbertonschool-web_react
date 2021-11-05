const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: inline-source-map,
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
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
	],
      },
    ],
  },
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: './public',
    port: 8564,
  },
};
