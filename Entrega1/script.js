class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
 getFullName(){
     return `Nombre completo: ${this.nombre} ${this.apellido}`;
 }
 addMascota(mascota){ 
    this.mascotas.push(mascota)
 }
 addBook(nombreL, autor){
     this.libros.push({
         nombre: `${nombreL}`,
         autor: `${autor}`,
           })
 }
 getBookNames(){
     return(this.libros.map(nomb => nomb.nombre))
 }
}

const usuario = new Usuario ('Albus Percival Wulfric Brian', 'Dumbledore', [{nombre: 'Harry Potter', autor: 'J.K',}],['Rata',]);
 
console.log(usuario.getFullName());
//tengo una duda como pedo hacer en la line 29 para no tener que pasarle las comillas al parametro y no me de error
usuario.addMascota('sapo');  

usuario.addBook('El señor de los anillos', 'Gandalf');

console.log(usuario.getBookNames());

console.log(usuario);