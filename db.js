const strConn = require('./strrConn');
const mongoose = require('mongoose');
//console.log('****', strConn);
const url = strConn;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useFindAndModify: false,
    useCreateIndex: true*/
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB...!'));
db.once('open', (callback) => {
    console.log('Conectado a MongoDB...!');
});

module.exports = db;

