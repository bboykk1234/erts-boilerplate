import * as path from "path";
import * as webpack from "webpack";
import * as merge from "webpack-merge";

import baseConfig from "./webpack.config.base";

const entry : webpack.Entry = {
    index: path.resolve(__dirname, '../sources/main/index.ts'),
    database: path.resolve(__dirname, '../sources/main/database.ts'),
    test: path.resolve(__dirname, '../sources/main/test.ts')
}

const target = 'electron-main' as 'electron-main';

const config : webpack.Configuration = merge.smart(
    baseConfig,
    {
        entry,
        target,
    }
)

export default config;