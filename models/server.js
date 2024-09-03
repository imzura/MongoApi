import express from 'express'
import 'dotenv/config' // Permite trabjar con variables de entorno
import dbConnection from '../database/config.js'
import routesVehicle from '../routes/vehicleRoutes.js'
import routesOwner from '../routes/ownerRoutes.js'
import routesUser from '../routes/userRoutes.js'

export default class Server {
    constructor() {
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathVehicle = '/api/vehicle' // link public API
        this.pathOwner = '/api/owner' // link public API
        this.pathUser = '/api/user'
        this.route()
    }

    listen() { // Method to listen the port
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running in PORT ${process.env.PORT}`)
        })
    }

    async dbConnection() { //call method dbConnection to conect to mongo
        await dbConnection()
    }

    route() {
        this.app.use(express.json())

        this.app.use(this.pathVehicle, routesVehicle)
        this.app.use(this.pathOwner, routesOwner)
        this.app.use(this.pathUser, routesUser)
    }
}

