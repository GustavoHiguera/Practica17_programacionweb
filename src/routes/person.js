let express = require('express'); //Se inyecta la dependencia
let router = express.Router(); //Se instancia el router al que asociaremos las rutas

router.get('/person', (req,res) =>{
    res.send(`has solicitado el listado de personas`);
})
//Una solicitud get que devuelve texto.

module.exports= router;