import { Router } from "express";
import LoginController from "../controller/logi.controller.mjs";
import AuthController from "../controller/user.controller.mjs";
import autenticarToken from "../middelware/autenticarToken.mjs";

const route = Router()
route.post('/register',AuthController.create)
route.post('/login',LoginController.inicioSesión)
route.put('/updatePassword',autenticarToken,LoginController.updatePasword)

export default route