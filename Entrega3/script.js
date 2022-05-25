
const fs = require('fs')

class Contenedor {
    
    static id = 0;  
    productos = [];

    constructor (fileName) {
        this.fileName=fileName; 

        if (fs.existsSync(this.fileName)){
            fs.readFile (this.fileName, (err, file) => {
                this.productos = file;
                if(err){
                    return 'Error';
                }
                Contenedor.id = this.productos; 
            })  
        }
    }; 
    
    save(prod){
        Contenedor.id++;
        prod.id = Contenedor.id;
        
        this.productos.push(prod); 
        fs.promises.writeFile(this.fileName, JSON.stringify(this.productos, null, 2))
        return console.log(JSON.parse(Contenedor.id)); 
    }; 
    getById(id){
       let prod = this.productos.filter(prodId => prodId.id === id) 
       console.log(prod);
       return prod
        
    };
    getAll(){  
        fs.promises.readFile('./archivo.txt', 'utf-8') 
        .then(contenido => {console.log(JSON.parse(contenido));;
            return JSON.parse(contenido)})
        .catch(err => console.log('error: ' + err))
    };
    deleteById(id){ 
        console.log(this.productos); 
        let prod = this.productos.filter(prodId => prodId.id !== id); 
        this.save(prod)
        console.log(prod); 
        return prod
       
    };
    deleteAll(){ fs.promises.unlink('./archivo.txt')};

} 

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
const gestor = new Contenedor('archivo.txt');

// (async () => {
//      await gestor.save(prod1);
//      await gestor.save(prod2); 
//      await gestor.save(prod3);
//      await gestor.getAll();
    
// })();

module.exports = Contenedor;
