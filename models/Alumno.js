const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnosSchema = new Schema({
    nombre: String,
    edad: Number
}, {versionKey: false});

module.exports = mongoose.model('alumnos', alumnosSchema);