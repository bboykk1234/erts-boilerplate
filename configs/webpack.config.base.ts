import * as path from "path";
import * as webpack from "webpack";
import { env } from "../sources/helper";

const mode = env;

const output : webpack.Output = {
    path: path.resolve(__dirname, "../app"),
    filename: "[name].js",
};

const moduleConfig : webpack.Module = {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }
    ]
};

const node : webpack.Node = {
    __dirname: true, // previously was false
    __filename: true, // previously was false
    fs: "empty",
}

const resolve : webpack.Resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
    alias: {
        Components: path.resolve(__dirname, '../sources/components/'),
        Database: path.resolve(__dirname, '../sources/database'),
        Models: path.resolve(__dirname, '../sources/models/'),
    }
};

const externals =  {
    sqlite3: 'commonjs sqlite3',
    sequelize: "commonjs sequelize",
    "sequelize-typescript": "commonjs sequelize-typescript",
    // pg: true,
    // 'pg-hstore': true,
    // tedious: true,
}


const config : webpack.Configuration = {
    mode,
    output,
    module : moduleConfig,
    resolve,
    node,
    externals,
};

export default config;