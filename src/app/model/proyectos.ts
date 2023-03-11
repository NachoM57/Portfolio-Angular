export class Proyectos {
    id?: number;
    imagen: String;
    titulo: String;
    descripcion: String;
    inicio: String;
    fin: String;


constructor(imagen: String,titulo: String,descripcion: String, inicio: String,fin: String){
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.inicio = inicio;
    this.fin = fin;
}
}

