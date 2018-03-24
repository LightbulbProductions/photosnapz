const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/photosnapz.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ""]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ["react", "env"]
        }
      }
    ]
  },
  devtool: "source-maps"
};

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}