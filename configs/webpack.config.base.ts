import * as path from "path";
import * as webpack from "webpack";

const mode = process.env.NODE_ENV as "development" | "production" | "none";

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
    __dirname: false,
    __filename: false,
    fs: "empty",
}

const resolve : webpack.Resolve = {
    extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.scss', '.json'],
    alias: {
        Components: path.resolve(__dirname, '../sources/components/'),
    }
};

const externals =  {
    sqlite3: 'commonjs sqlite3',
    pg: true,
    'pg-hstore': true,
    tedious: true,
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