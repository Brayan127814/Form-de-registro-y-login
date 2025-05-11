
import AuthService from "../Service/authServices.service.mjs";

class AuthController {
    static async create(req, res) {
        try {

            const data = req.body
            const user = await AuthService.createUser(
                {
                    arrayData:["nombre","apellido","email","password"],
                    data
                }
            )
            return res.status(user.status).json(
                {
                    message: user.message,
                    data: user.data || null,
                    error: user.error || null
                }
            )
        } catch (error) {
            return res.status(500).json({
                message: error.message,
                status: 500
            })
        }
    }
}

export default AuthController