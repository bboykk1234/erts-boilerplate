import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

import baseConfig from "./webpack.config.base";

const entry : webpack.Entry = {
    index: path.resolve(__dirname, '../server/index.ts')
}

const target = 'electron-main' as 'electron-main';

const plugins : webpack.Plugin[] = [
    new CopyWebpackPlugin([
        { from: "server/package.json", flatten: true },
        // { from: "node_modules/7zip/7zip-lite/*", flatten: true, to: '7zip-lite/' },
    ]) as webpack.Plugin,
];

const config : webpack.Configuration = merge.smart(
    baseConfig,
    {
        entry,
        target,
        plugins,
    }
)

export default config;