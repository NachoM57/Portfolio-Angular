export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    imagenperfil: String;
    descripcion: String;

    constructor(nombre: String,apellido: String,imagenperfil: String,descripcion:String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.imagenperfil = imagenperfil;
    this.descripcion = descripcion;
    }
}