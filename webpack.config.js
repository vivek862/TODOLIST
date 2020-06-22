const path = require('path');
const src = path.join(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app: [src],
      vendor: ["react",
      "react-dom",
      "react-redux",
      "react-router",
      "connected-react-router",
      "redux",
      "redux-thunk"]
    },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(src, 'index.html'),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
        inject: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
      reducers : path.resolve(__dirname, 'src/reducers/'),
      store: path.resolve(__dirname, 'src/store/')
    }
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
};