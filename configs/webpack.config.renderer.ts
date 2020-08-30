import { CleanWebpackPlugin }  from "clean-webpack-plugin";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as merge from "webpack-merge";
import * as path from "path";
import * as webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";

import baseConfig from "./webpack.config.base";
import { isDev, appPath } from "../sources/helper";

const entry : webpack.Entry = {
    renderer: path.resolve(__dirname, '../sources/renderer/index.tsx')
};

const moduleConfig : webpack.Module = {
    rules: [
        {
            test    : /\.s(c|a)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true,
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                    }
                },
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

const output : webpack.Output = {
    publicPath : appPath
};

let plugins : webpack.Plugin[] = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!package.json', '!index.js'],
    }),
    new CopyWebpackPlugin([
        // { from: "bootstrap/core/*", flatten: true}
        { from: "sources/index.html", flatten: true},
    ]),
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

if (isDev) {
    plugins = [
        ...plugins,
        new webpack.HotModuleReplacementPlugin(),
    ]
}

const devServer : WebpackDevServer.Configuration = {
    publicPath  : appPath,
    contentBase : path.resolve(__dirname, "app"),
    compress    : true,
    port        : 8888,
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


let config : webpack.Configuration = merge.smart(
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