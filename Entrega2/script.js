// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.
// El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
// Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
// Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
// Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
// Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 

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

(async () => {
     await gestor.save(prod1);
     await gestor.save(prod2); 
     await gestor.save(prod3);
    // await gestor.getById(3);
    //await gestor.getAll();
    await gestor.deleteById(2);
    await gestor.getAll(); 
    //await gestor.deleteAll() este si funciona
    
})();


