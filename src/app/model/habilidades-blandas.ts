export class HabilidadesBlandas {
    id?: number;
    imagen: string;
    titulo: string;
    descripcion: string;



    constructor(imagen: string, titulo: string, descripcion: string) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
