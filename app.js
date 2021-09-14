const express = require('express');


const db = require('./db');
const alumnos = require('./routes/alumnos');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use(alumnos);

// app.get('/', (req, res, next) => {
//     console.log('Hello from HOME get METHOD');
//     res.send('Hola Mundo');
// });

app.listen(3000, () => {
    console.log('Server up in: localhost:3000');
    
})