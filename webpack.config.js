const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  devtool: "source-map",
  externalsPresets: { node: true },
  externals: [
    nodeExternals({
      // this next line breaks build
      allowlist: [/(@sima-land)/],
    }),
  ],
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new NodemonPlugin()],
};
