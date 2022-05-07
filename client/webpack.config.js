const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
module.exports = {
  plugins: [
    new CaseSensitivePathsPlugin(),
  ],
};
