export class Estudios {
    id?: number;
    estudio: string;
    lugar: string;
    inicio: string;
    fin: string;
    descripcion: string;


constructor(estudio: string,lugar: string, inicio: string,fin: string,descripcion: string){
    this.estudio = estudio;
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
}
}

