export class Estudios {
    id?: number;
    estudio: String;
    lugar: String;
    inicio: String;
    fin: String;
    descripcion: String;


constructor(estudio: String,lugar: String, inicio: String,fin: String,descripcion: String){
    this.estudio = estudio;
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
}
}

