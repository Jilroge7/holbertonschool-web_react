const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: inline-source-map,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
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
	  'image-webpack',
	],
      },
    ],
  },
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: './public',
    port: 8564,
    hit: true,
  },
};
