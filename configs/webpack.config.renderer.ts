import { CleanWebpackPlugin }  from "clean-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import * as path from "path";
import * as webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";

import baseConfig from "./webpack.config.base";
import { isDev, appPath, port } from "../sources/helper";

const entry : webpack.Entry = {
    renderer: path.resolve(__dirname, '../sources/index.tsx')
};

const moduleConfig = {
    rules: [
        {
            test    : /\.s(c|a)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                    }
                },
                'postcss-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf)?$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/",
                publicPath: appPath + "/fonts/"
            }
        },
        {
            test: /\.(svg|png|jpe?g|gif)?$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "assets/images/",
                publicPath: appPath + "/images/"
            }
        }
    ]
};

const target = 'electron-renderer' as 'electron-renderer';

const output = {
    publicPath : appPath
};

let plugins : webpack.WebpackPluginInstance[] = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!package.json', '!index.js'],
    }),
    new HtmlWebpackPlugin({
        filename : "index.html",
        template : "sources/index.html",
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
];

const devServer: WebpackDevServer.Configuration = {
    publicPath  : appPath,
    contentBase : path.resolve(__dirname, "../app"),
    compress    : true,
    port        : port ?? 8000,
    hot         : true,
    hotOnly     : false,
    stats       : "errors-only",
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 100
    },
};


let config : webpack.Configuration = merge(
    baseConfig,
    {
        entry,
        module: moduleConfig,
        target,
        output,
        plugins,
    }
)

if (isDev) {
    config = {
        ...config,
        devServer,
    }
};

export default config;