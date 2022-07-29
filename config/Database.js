import {Sequelize} from "sequelize";

const db = new Sequelize('vtour','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;