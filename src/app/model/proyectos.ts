export class Proyectos {
    id?: number;
    imagen: string;
    titulo: string;
    link: string;
    descripcion: string;
    inicio: string;
    fin: string;


    constructor(imagen: string, titulo: string, link:string, descripcion: string, inicio: string, fin: string) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.link = link;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;
    }
}

