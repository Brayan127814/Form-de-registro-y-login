import connect from "../config/dv.mjs";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isValidCredentials from "../utils/validarCamposLogin.mjs";
import users from "../model/user.model.mjs";


class AuthLogin {
    static async Login(email, password) {
        try {

            if (!isValidCredentials(email, password)) {
                return {
                    message: "email o password son incorrectos",
                    status: 400
                }
            }

            //BUSCAR EL USUARIO
            let usuario = await users.findOne({
                where: { email }
            })

            if (!usuario) {
                return {
                    message: "Usuario no encontrado",
                    status: 404
                }
            }

            //Comparar contraseñas
            let isMatch = await bcrypt.compare(password, usuario.password)
            if (!isMatch) {
                return {
                    message: "Contraseña incorrecta",
                    status: 400
                }
            }

            //Generar token
            const token = jwt.sign({ id: usuario.id }, process.env.keySecret, { expiresIn: "1h" })

            return {
                message: "inicio de sesión exitoso",
                token,
                success: true,
                status: 200
            }

        } catch (error) {
            return {
                message: 'Error al iniciar sesion',
                error: error
            }
        }
    }


    // Actualizar contraseña
    static async actualizarContraseña({ userID, password }) {
        try {
            console.log(userID)
            if (!userID) {
                return {
                    message: 'Ingresa al sistema',
                    status: 400
                };
            }

            const user = await users.findOne({
                where: { id: userID }
            });

            if (!user) {
                return {
                    message: 'Usuario no encontrado',
                    status: 403
                };
            }

            console.log('password recibido  ', password)

            const hashedPassword = await bcrypt.hash(password.password, 10); // Hashear contraseña

            await users.update(
                { password: hashedPassword },
                { where: { id: userID } }
            );

            return {
                message: 'Contraseña actualizada',
                status: 200
            };
        } catch (error) {
            return {
                message:'no se pudo acutualizar la contraseña',
                error: error.message,
                status: 500
            };
        }
    }



}



export default AuthLogin