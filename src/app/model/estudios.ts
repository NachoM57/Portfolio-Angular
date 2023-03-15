export class Estudios {
    id?: number;
    estudio: string;
    lugar: string;
    descripcion: string;
    inicio: string;
    fin: string;



    constructor(estudio: string, lugar: string, descripcion: string, inicio: string, fin: string,) {
        this.estudio = estudio;
        this.lugar = lugar;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;

    }
}

