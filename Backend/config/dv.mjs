import dotenv from "dotenv"
import { Sequelize } from "sequelize"
dotenv.config()


//Establecer conexión con la base de datos

console.log(process.env.HOST)
console.log(process.env.USER)
console.log(process.env.PASSWORD)
console.log(process.env.DB_NAME)
const connect = new Sequelize(


    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: process.env.HOST
        
    }
)

//Validar la conexion
const validar = async () => {
    try {
        await connect.authenticate()
        console.log("Conexión Exitosa")
    } catch (error) {
        console.error("No se pudo establecer la conexión", error)
    }
}



validar()

export default connect