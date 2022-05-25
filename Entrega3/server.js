const Contenedor = require ('./script');
const express = require ('express');
const PORT = 8080;
const app = express();

const prod1 = {
    title: 'Iphone 13',
    price: 1300,
    link: 'https://www.youtube.com/watch?v=mCdA4bJAGGk'
}

const prod2 = {
    title: 'Iphone 12',
    price: 1100,
    link: 'https://www.youtube.com/watch?v=mCdA4bJAGGk'
}

const prod3 = {
    title: 'Iphone 11',
    price: 1000,
    link: 'https://www.youtube.com/watch?v=mCdA4bJAGGk'
}

const productos = new Contenedor('productos.txt');

const guardar = async() => {
    await productos.save(prod1);
    await productos.save(prod2); 
    await productos.save(prod3);
    await productos.getAll();
   }  
guardar()



app.get('/productos' , async (req, res) => {

    const mostrarProductos = await JSON.parse(productos.productos); 
    console.log('MOSTRAR PROD' + mostrarProductos);
    res.send(mostrarProductos); 


});

app.get('/productosRandom' , async (req, res) => {

    const p = await JSON.parse(productos.productos);   
    console.log('Holaaaaaaaaaaaaaaa' + p);
    const numeroRandom = Math.floor(Math.random() * p.length); 
    console.log('numero random '+p[numeroRandom]);
    res.send(p[numeroRandom]);

});

app.listen (PORT, () => console.log(`Server corriendo una maraton en el puerto: ${PORT}`));
