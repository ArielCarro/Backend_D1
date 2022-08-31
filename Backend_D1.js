class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(newMascota){
        this.mascotas=[...this.mascotas,newMascota]
    }
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBook(nombreLibro,nombreAutor){
        this.libros=[...this.libros,{nombre:nombreLibro,autor:nombreAutor}]
    }
    getBookNames(){
        const bookNames=[]
        for (let i = 0; i < this.libros.length; i++) {
            bookNames.push(this.libros[i].nombre)          
        }
        console.log(bookNames);
    }
}

const User1 = new Usuario("José","Perez",[{nombre:"El Princito",autor:"Antoine de Saint-Exupéry"}],["Firulais"])

User1.getFullName()
User1.addMascota("michi")
User1.countMascotas()
User1.addBook("La vida es sueño","Pedro Calderón de la Barca")
User1.getBookNames()