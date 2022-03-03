module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // "@storybook/preset-create-react-app"
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExludes: ['less'],
        },
      },
    },
  ],
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       test: /\.less$/,
//       use: [
//         "style-loader",
//         "css-loader",
//         {
//           loader: "less-loader",
//           options: {
//             lessOptions: {
//               javascriptEnabled: true,
//             },
//           },
//         },
//       ],
//     });
//     return {
//       ...config,
//     };
//   },
// };
  // "framework": "@storybook/react",
  // "core": {
  //   "builder": "webpack5"
  // },
  // webpackFinal: async (config, { configType }) => {
// THIS:
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if (plugin.constructor.name === "ESLintWebpackPlugin") {
          return false;
        }
        return true;
      }),
    };
  },
};