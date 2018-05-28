function hoteles(req, res){
    if(req.params.nombreHotel){
    var nombreHotel = req.params.nombreHotel;
    }else{
    var nombreHotel = "SIN NOMBRE DE HOTEL";
    }
    // podemos devolver cualquier cosa, lo mejor es devolver un json
    res.status(200).send({ data:[1,2,3], message: "El hotel apto para mascotas más cercano es:"+nombreHotel})
    }
    module.exports = { hoteles }