import { Router } from 'express'
import { getVehicle, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicleControllers.js'

const routesVehicle = Router()

routesVehicle.get('/', getVehicle)
routesVehicle.post('/', postVehicle)
routesVehicle.put('/', putVehicle)
routesVehicle.delete('/:id', deleteVehicle)

export default routesVehicle