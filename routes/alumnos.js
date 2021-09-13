const express = require('express');

const alumnoController = require('../controllers/alumnoController');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log('GET from Routes');
//     alumnoController.mostrar();
//     res.send('GET from Routes')
// });

//Mostrar todos los alumnos GET
router.get('/', alumnoController.mostrar);

//Mostrar todos los alumnos POST
router.post('/crear', alumnoController.crear);

//Editar alumnos POST
router.post('/editar', alumnoController.editar);

//Borrar alumnos GET
router.get('/borrar/:id', alumnoController.borrar);

module.exports = router;

