let path = require('path');


module.exports = {
    development: {
        storage: path.resolve(__dirname, "../test.db"),
        dialect: "sqlite",
    },
    test: {
        storage: path.resolve(__dirname, "../test.db"),
        dialect: "sqlite",
    },
    production: {
        storage: path.resolve(__dirname, "../test.db"),
        dialect: "sqlite",
    }
}
