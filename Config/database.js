import { Sequelize } from "sequelize";

const database = new Sequelize('basedetutorial', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default database;