import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Fasilitas = db.define('fasilitas',{
    namafasilitas: DataTypes.STRING,
    linktour: DataTypes.STRING,
    penjelasan: DataTypes.STRING
},{
    freezeTableName: true
});

export default Fasilitas;

(async()=>{
    await db.sync();
})();