export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    imagenperfil: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, imagenperfil: string, descripcion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagenperfil = imagenperfil;
        this.descripcion = descripcion;
    }
}