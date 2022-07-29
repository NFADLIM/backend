import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Gedung = db.define('gedung',{
    namagedung: DataTypes.STRING,
    penjelasan: DataTypes.STRING,
    linktour: DataTypes.STRING,
    gambar: DataTypes.STRING
},{
    freezeTableName: true
});

export default Gedung;

(async()=>{
    await db.sync();
})();