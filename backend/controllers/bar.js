function getBar(req, res) {
    // obtenemos el id del coche que quieren obtener
    var barId = req.params.id
    res.status(200).send({ accion: "get", data: barId })
    //TODO falta acceder a la base de datos 
}

function getHotels(req, res) {
    // obtenemos el id del coche que quieren obtener
    var params = req.body
    res.status(200).send({ accion: "get all", data: params })
    //TODO falta acceder a la base de datos 
}

function saveBar(req, res) {
    var params = req.body
    res.status(200).send({ accion: "save", data: params })
    //TODO falta acceder a la base de datos 
}

function updateBar(req, res) {
    var barId = req.params.id
    var params = req.body
    res.status(200).send({ accion: "update", idCambiar: barId, bar: params })
}

function deletebar(req, res){
     var barId = req.params.id
      res.status(200).send({accion:"delete", data: barId}) 
    } 

module.exports = { getBar, getBars, saveBar, updateBar, deleteBar }
