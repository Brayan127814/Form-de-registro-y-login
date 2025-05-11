import connect from "./Backend/config/dv.mjs";
import express from 'express'
import route from "./Backend/Routes/userRoutes.mjs";


const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.use('/user',route)



const init = async () => {
    try {
        await connect.sync(
            {
                force: false

            }
        )
        console.log("Database connected successufully")
        app.listen(PORT, () => {
            console.log(`Conexión establecida en el puerto ${PORT}`)
        })

    } catch (error) {
        console.error("Error al sincronizar la base de datos")

    }

}

init()
