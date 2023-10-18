const express = require('express')
const  router = express.Router()

// endpoints url de bootcamps
//
//Obtener todos los bootcamps
router.get(('/') ,(request, response)=>{
    response
    .status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los bootcamps"
    })
})

//Obtener bootcamp por id 
router.get(('/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo bootcamp con id ${request.params.id} `
    })
})

//Crear bootcamp
router.post(('/api/v1/devcamp/bootcamps') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un bootcamp"
    })
})

//Actualizar  bootcamp
router.put(('/api/v1/devcamp/bootcamps/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar bootcamp con id ${request.params.id} `
    })
})

//Eliminar bootcamp
router.delete(('/api/v1/devcamp/bootcamps/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar bootcamp con id ${request.params.id} `
    })
})

/*
app.get(('/api/v1/devcamp/cursos') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los cursos del bootcamp"
    })
})
app.get(('/api/v1/devcamp/cursosGeneral') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos los cursos en general"
    })
})

app.get(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo cursos con id ${request.params.id} `
    })
})

app.post(('/api/v1/devcamp/cursos') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear un curso"
    })
})

app.put(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar cursos con id ${request.params.id} `
    })
})

app.delete(('/api/v1/devcamp/cursos/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar curso con id ${request.params.id} `
    })
})

app.get(('/api/v1/devcamp/rewiewsBootcamp') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos las reseñas del bootcamp"
    })
})
app.get(('/api/v1/devcamp/rewiews') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui van a mostrarse todos las reseñas en general"
    })
})

app.get(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Obteniendo reseña con id ${request.params.id} `
    })
})

app.post(('/api/v1/devcamp/rewiews') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : "aqui se va a crear una reseña"
    })
})

app.put(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Actualizar reseñas con id ${request.params.id} `
    })
})

app.delete(('/api/v1/devcamp/rewiews/:id') ,(request, response)=>{
    response.status(200)
    .json({
        "succes": true,
        "msg" : `Eliminar reseñas con id ${request.params.id} `
    })
})*/

//Exportar (commonjs) router

module.exports = router

