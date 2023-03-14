export class Proyectos {
    id?: number;
    imagen: string;
    titulo: string;
    descripcion: string;
    inicio: string;
    fin: string;


constructor(imagen: string,titulo: string,descripcion: string, inicio: string,fin: string){
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.inicio = inicio;
    this.fin = fin;
}
}

