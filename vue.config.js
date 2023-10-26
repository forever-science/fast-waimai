const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-pxtorem")({
              // 把px单位换算成rem单位
              rootValue: 37.5, // vant官方使用的是37.5
              selectorBlackList: ["vant", "mu"], // 忽略转换正则匹配项
              propList: ["*"],
            }),
          ],
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
}