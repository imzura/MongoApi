import { Router } from "express";
import { createUser, getUser, loginUser } from '../controllers/userController.js'

const routesUser = Router();

routesUser.post('/', createUser)
routesUser.get('/', getUser)
routesUser.post('/login', loginUser)

export default routesUser
