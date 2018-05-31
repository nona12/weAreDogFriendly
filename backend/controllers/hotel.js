var Hotel = require('../models/hotel');

var cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name:"nona12",
    api_key:"718295277149111",
    api_secret:"FrH_xWEF6nXse0pviwJlyk4q1uc"
});




function getHotel(req, res) {
    // obtenemos el id del hotel a buscar
    var hotelId = req.params.id
    // realizamos la consulta, buscando un hotel por id 
    Hotel.findById(hotelId, (err, hotelObtenido) => {
        if (err) {
            // si la consulta genera algun error 
            res.status(500).send({ accion: "get one", menssage: 'error al devolver el hotel' })
        } else if (!hotelObtenido) {
            // si no se ha encontrado el hotel
            res.status(404).send({ accion: "get one", menssage: 'no hay hoteles' })
        } else {
            // si todo ha ido bien 
            res.status(200).send({ accion: "get one", data: hotelObtenido })
        }
    })
}

function getHotels(req, res) {
    // obtenemos todos los coches ordenando por id
    Hotel.find({}).sort('-_id').exec((err, hotels) => {
        if (err) {
            // si la consulta da un error
            res.status(500).send({ accion: "get all", menssage: 'error al devolver los hoteles' })
        } else if (!hotels) { // si no se han obtenido ningún
            res.status(404).send({ accion: "get all", menssage: 'no hay hoteles guardados' })
        } else { // si todo ha ido bien
            res.status(200).send({ accion: "get all", data: hotels })
        }
    })
}



function saveHotel(req, res) {
    var params = req.body
    // creamos un objeto del modelo Hotel
    var hotel = new Hotel();
    // rellenamos el objetoz
   
    hotel.name = params.name
    hotel.photo=params.photo
    hotel.type = params.type
    hotel.direccion = params.direccion
    hotel.phone = params.phone
    hotel.city = params.city
    hotel.province = params.province
    hotel.web = params.web
    hotel.email = params.email
    hotel.price = params.price
    hotel.description = params.description
    hotel.punctuation = params.punctuation

    console.log(hotel.photo)
       // guardamos en cloudinary
       cloudinary.uploader.upload(hotel.photo,
         function(result) { console.log(result)
            params.photo=result.url;

            // guardamos en base de datos
            hotel.save((err, hotelStored) => {
                if (err) {
                    // si hay un error devolvemos un error de tipo servidor 500
                    res.status(500).send({ menssage: 'error al guardar el hotel' })
                } else {
                    res.status(200).send({ accion: "save", hotel: hotelStored })
                }
            })
         });

}


function updateHotel(req, res) {
       // obtenemos el id del hotel a modificar
       var hotelId = req.params.id
       // obtenemos los nuevo datos del hotel
       var params = req.body
       // realizamos una consulta de actualización
       Hotel.findByIdAndUpdate(hotelId, params, (err, hotelUpdated) => {
           if (err) {
               // si hay un error en la consulta devolvemos un error de tipo servidor 500
               res.status(500).send({ menssage: 'error al actualizar el hotel' })
           } else { // si todo ha ido bien 
               res.status(200).send({ accion: "update", hotel: hotelUpdated })
           }
       })
   }

function deleteHotel(req, res) {
   // obtenemos el id del hotel a borrar 
   var hotelId = req.params.id
   // buscamos el hotel que deseamos borrar
   Hotel.findById(hotelId, (err, hotelEncontrado) => {
       if (err) {
           // si hay un error en la consulta 
           res.status(500).send({ accion: "delete", menssage: 'error al devolver el hotel' })
       } else if (!hotelEncontrado) {
           // si no se ha encontrado el hotel 
           res.status(404).send({ accion: "delete", menssage: 'no existe el hotel' })
       } else {
           // ojo usa hotelEncontrado y no Hotel(que borra todo)
           hotelEncontrado.remove((err) => {
               if (err) {
                   // si elhotelbar no se ha podido borrar
                   res.status(500).send({ menssage: 'el hotel no se ha podidio borrar' })
               } else { // si todo ha ido bien
                   res.status(200).send({ message: "el hotel se ha eliminado" })
               }
           })
       }
   })
}


module.exports = { getHotel, getHotels, saveHotel, updateHotel, deleteHotel }