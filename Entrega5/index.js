// Desarrollar un servidor basado en node.js, express y ejs que disponga de un formulario en su ruta raíz (creado con una plantilla de ejs) para ingresar los siguientes datos de una persona: nombre, apellido y edad. 
// La información será enviada mediante el método post al endpoint '/personas
// Representar por debajo del mismo formulario los datos históricos ingresados más el actual en forma de tabla. En el caso de no encontrarse información mostrar el mensaje 'No se encontraron datos' en lugar de la tabla.

// Se sugiere el uso de bootstrap para los estilos de las plantillas. Ejemplos a continuación:


const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', './view');
app.set('view engine', 'ejs');

let productos = [];

app.get('/personas', (req, res) => {
    res.render('pages/index.ejs', {productos});
});

app.post('/personas', (req, res) => {
    productos.push({...req.body});
    res.render('pages/index.ejs', {productos});
}); 


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});