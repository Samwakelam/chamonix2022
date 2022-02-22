const path = require('path');
const tsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-backgrounds',
    ],
    framework: '@storybook/react',
    // webpackFinal: async (config) => {
    //     config.module.rules.push({
    //         test: /\.(ts|tsx)$/,
    //         use: [
    //             {
    //                 loader: 'ts-loader',
    //                 options: {
    //                     configFile: path.resolve(__dirname, '../tsconfig.json'),
    //                 },
    //             },
    //         ],
    //     });

    //     config.resolve.plugins = [
    //         new tsConfigPathsPlugin({
    //             configFile: path.resolve(__dirname, '../tsconfig.json'),
    //         }),
    //     ];

    //     config.resolve.extensions.push('.ts', '.tsx');

    //     return config;
    // },
};
