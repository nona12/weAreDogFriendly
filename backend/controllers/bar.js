var Bar = require('../models/bar')

function getBar(req, res) {
    // obtenemos el id del bar a buscar
    var barId = req.params.id
    // realizamos la consulta, buscando un bar por id 
    Bar.findById(barId, (err, barObtenido) => {
        if (err) {
            // si la consulta genera algun error 
            res.status(500).send({ accion: "get one", menssage: 'error al devolver el bar' })
        } else if (!barObtenido) {
            // si no se ha encontrado el bar
            res.status(404).send({ accion: "get one", menssage: 'no hay bar' })
        } else {
            // si todo ha ido bien 
            res.status(200).send({ accion: "get one", data: barObtenido })
        }
    })
}


function getBars(req, res) {
    // obtenemos todos los bares ordenando por id
    Bar.find({}).sort('-_id').exec((err, bars) => {
        if (err) {
            // si la consulta da un error
            res.status(500).send({ accion: "get all", menssage: 'error al devolver los bares' })
        } else if (!bars) { // si no se han obtenido ningún
            res.status(404).send({ accion: "get all", menssage: 'no hay bares guardados' })
        } else { // si todo ha ido bien
            res.status(200).send({ accion: "get all", data: bars })
        }
    })
}

function saveBar(req, res) {
    var params = req.body
    // creamos un objeto del modelo Hotel
    var bar = new Bar();
    // rellenamos un el objeto
    bar.name = params.name
    bar.type = params.type
    bar.direccion = params.direccion
    bar.phone = params.phone
    bar.city = params.city
    // guardamos el favorito
    bar.save((err, saveStored) => {
        if (err) {
            // si hay un error devolvemos un error de tipo servidor 500
            res.status(500).send({ menssage: 'error al guardar el bar' })
        } else {
            res.status(200).send({ accion: "save", bar: barStored })
        }
    })
}

function updateBar(req, res) {
    // obtenemos el id del coche a modificar
    var barId = req.params.id
    // obtenemos los nuevo datos del coche
    var params = req.body
    // realizamos una consulta de actualización
    Bar.findByIdAndUpdate(barId, params, (err, barUpdated) => {
        if (err) {
            // si hay un error en la consulta devolvemos un error de tipo servidor 500
            res.status(500).send({ menssage: 'error al actualizar el bar' })
        } else { // si todo ha ido bien 
            res.status(200).send({ accion: "update", bar: barUpdated })
        }
    })
}

function deleteBar(req, res) {
    // obtenemos el id del bar a borrar 
    var barId = req.params.id
    // buscamos el bar que deseamos borrar
    Bar.findById(barId, (err, barEncontrado) => {
        if (err) {
            // si hay un error en la consulta 
            res.status(500).send({ accion: "delete", menssage: 'error al devolver el bar' })
        } else if (!barEncontrado) {
            // si no se ha encontrado el bar 
            res.status(404).send({ accion: "delete", menssage: 'no existe el bar' })
        } else {
            // ojo usa barEncontrado y no Bar(que borra todo)
            barEncontrado.remove((err) => {
                if (err) {
                    // si el bar no se ha podido borrar
                    res.status(500).send({ menssage: 'el bar no se ha podidio borrar' })
                } else { // si todo ha ido bien
                    res.status(200).send({ message: "el bar se ha eliminado" })
                }
            })
        }
    })
}

module.exports = { getBar, getBars, saveBar, updateBar, deleteBar }
