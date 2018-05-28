
function getHotel(req, res) {
    // obtenemos el id del coche que quieren obtener
    var hotelId = req.params.id
    res.status(200).send({ accion: "get", data: hotelId })
    //TODO falta acceder a la base de datos 
}

function getHotels(req, res) {
    var params = req.body
    res.status(200).send({ accion: "get all", data: params })
    //TODO falta acceder a la base de datos 
}

function saveHotel(req, res) {
    var params = req.body
    res.status(200).send({ accion: "save", data: params })
    //TODO falta acceder a la base de datos 
}

function updateHotel(req, res) {
    var hotelId = req.params.id
    var params = req.body
    res.status(200).send({ accion: "update", idCambiar: hotelId, hotel: params })
}

function deleteHotel(req, res) {
    var hotelId = req.params.id
    res.status(200).send({ accion: "delete", data: hotelId })
}


module.exports = { getHotel, getHotels, saveHotel, updateHotel, deleteHotel }