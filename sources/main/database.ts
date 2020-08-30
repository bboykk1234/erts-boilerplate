import { Sequelize } from "sequelize-typescript";
import User from "./models/User";

const Database = new Sequelize({
    storage: "test.db",
    dialect: "sqlite",
});

Database.addModels([User]);

export {
    Database,
    User
};
