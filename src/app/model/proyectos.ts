export class Proyectos {
    id?: number;
    imagen: string;
    titulo: string;
    link: string;
    descripcion: string;



    constructor(imagen: string, titulo: string, link:string, descripcion: string) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.link = link;
        this.descripcion = descripcion;
    }
}

