const express = require('express')

//Crear el objeto principal de la api

const app = express()


//rutas de bootcamps
const bootcampRoutes = require('./rutas/bootcamps')
const usersRoutes = require('./rutas/users')

//vincular  rutas al objeto app
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)


//rutas de users.js



//vincular  rutas al objeto app
app.use("/api/v1/devcamp/users", usersRoutes)









//Crear el servidor de la aplicacion
app.listen(6000,console.log ('servidor ejecutando en puerto ' + 6000))