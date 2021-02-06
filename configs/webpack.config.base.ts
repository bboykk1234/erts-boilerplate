import * as path from "path";
import * as webpack from "webpack";
import { env } from "../sources/helper";

const mode = env;

const output = {
    path: path.resolve(__dirname, "../app"),
    filename: "[name].js",
};

const moduleConfig = {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }
    ]
};

const node = {
    __dirname: true, // previously was false
    __filename: true, // previously was false
}

const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
    alias: {
        Components: path.resolve(__dirname, '../sources/components/'),
        Database: path.resolve(__dirname, '../sources/database'),
        Models: path.resolve(__dirname, '../sources/models/'),
    }
};

const config : webpack.Configuration = {
    mode,
    output,
    module : moduleConfig,
    resolve,
    node,
};

export default config;