const Alumno = require('../models/Alumno');

//Mostrar
module.exports.mostrar = (req, res, next) => {
    console.log('...Hello from controller.');
    Alumno.find({}, (error, alumnos) => {
        if(error){
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            });
        }
        //console.log(alumnos);
        return res.render('index', {alumnos: alumnos});
    });
}

// module.exports = function mostrar()  {
//     console.log('...Hello from controller.');
//     Alumno.find({}, (error, alumnos) => {
//         if(error){
//             return res.status(500).json({
//                 message: 'Error mostrando los alumnos'
//             });
//         }
//         console.log(alumnos);
//     });
// }

module.exports.crear = (req, res, next) => {
    const alumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad
    });
    alumno.save( (error, alumno) => {
        if(error){
            return res.status(500).json({
                message: 'Error al crear el alumno'
            });
        }
        res.redirect('/');
    });
}

module.exports.editar = (req, res, next) => {
    const id = req.body.id_editar;
    const nombre = req.body.nombre_editar;
    const edad = req.body.edad_editar;

    Alumno.findByIdAndUpdate(id, {nombre, edad}, (error) => {
        if(error){
            return res.status(500).json({
                message: 'Error editando el alumno'
            });
        }
        res.redirect('/');
    });
}

module.exports.borrar = (req, res, next) => {
    const id = req.params.id;
    Alumno.findByIdAndRemove(id, (error) => {
        if(error){
            return res.status(500).json({
                message: 'Error editando el alumno'
            });
        }
        res.redirect('/');
    });
}