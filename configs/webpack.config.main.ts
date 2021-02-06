import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

import baseConfig from "./webpack.config.base";

const entry: webpack.Entry = {
    index: path.resolve(__dirname, '../server/index.ts')
}

const target = 'electron-main' as 'electron-main';

const plugins: webpack.WebpackPluginInstance[] = [
    new CopyWebpackPlugin({
        patterns: [
            { from: "server/package.json", to: "[name].[ext]" },
        ]
    }) as webpack.WebpackPluginInstance,
];

const config: webpack.Configuration = merge(
    baseConfig,
    {
        entry,
        target,
        plugins,
    }
)

export default config;