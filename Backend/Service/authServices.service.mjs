import users from "../model/user.model.mjs";
import bcrypt from 'bcrypt'
import isPasswordSecure from "../utils/passwordSecurity.mjs";
//Servicio para registro usuarios


class AuthService {
    static async createUser({ arrayData, data }) {
        try {
            //Validar  quelos campos novengan vacios

            for (let field of arrayData) {
                if (!data[field]?.trim()) {
                    return {
                        message: `El campo ${field} no puede estár vacio`,
                        status: 400
                    }
                }
            }
            //Encriptar contraseña
            
            if (!isPasswordSecure(data.password)) {
                return {
                    message: "La contraseña debe tener 8+ caracteres, mayúsculas, minúsculas, números y símbolos (@$!%*?&)",
                    status: 400
                }
            }
            data.password = await bcrypt.hash(data.password, 10)

            let user = await users.create(data)

            return {
                message: "Usuario creado",
                data: user.nombre,
                status: 200
            }
        } catch (error) {
            return {
                message: "Error al crear el usuario",
                error: error.message,
                status: 500
            }
        }
    }
}

export default AuthService