function bares(req, res){
    if(req.params.nombreBar){
    var nombreBar = req.params.nombreBar;
    }else{
    var nombreBar = "SIN NOMBRE DE BAR";
    }
    // podemos devolver cualquier cosa, lo mejor es devolver un json
    res.status(200).send({ data:[1,2,3], message: "El bar apto para mascotas más cercano es:"+nombreBar})
    }
    module.exports = { bares }