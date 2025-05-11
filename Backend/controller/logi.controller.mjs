import AuthLogin from "../Service/loginServicel.mjs";

class LoginController {
    static async inicioSesión(req, res) {
        try {
            const { email, password } = req.body
            const response = await AuthLogin.Login(email, password)

            return res.status(response.status).json(
                {
                    message: response.message,
                    token: response.token || null,
                    success: response.success || null,

                }
            )

        } catch (error) {
            return res.status(400).json({
                message: "Error al iniciar sesion",
                error: error.message,
                status:500
            })
        }
    }

    //Controlador para actualizar contraseña
    static async updatePasword (req, res){
        try {
             const password = req.body
             const userID= req.user.id
             const response = await AuthLogin.actualizarContraseña({userID,password})

             return res.status(response.status).json({
                message:response.message,
                status:response.status,
                error: response.error || null
             })
        } catch (error) {
                 return res.status(500).json({
                message: "Error al iniciar sesion",
                error: error.message,
                
            })
            
        }
    }
}

export default LoginController