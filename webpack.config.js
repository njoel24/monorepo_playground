const webpack = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getEnvironment = (env = {}) => {
  return {
    "process.env.isLocal": env && env.isLocal,
  };
};

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "private";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new webpack.DefinePlugin(getEnvironment(webpackConfigEnv)),
    ],
  });
};
