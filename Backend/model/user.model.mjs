import connect from "../config/dv.mjs";
import { DataTypes } from "sequelize";



//Modelo usuarios
const users = connect.define("usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                min:8
            }
        }
    }
)

export default users