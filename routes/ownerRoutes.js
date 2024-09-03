import { Router } from "express";
import { getOwner, postOwner, putOwner, deleteOwner } from '../controllers/ownerControllers.js'

const routesOwner = Router()

routesOwner.get('/', getOwner)
routesOwner.post('/', postOwner)
routesOwner.put('/', putOwner)
routesOwner.delete('/:id', deleteOwner)

export default routesOwner