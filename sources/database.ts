import { Sequelize } from "sequelize-typescript";

const Database = new Sequelize({
    storage: "test.db",
    dialect: "sqlite",
});

export default Database;
