const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./components/App.jsx"],
  output: {
    path: path.resolve(__dirname, "components"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
