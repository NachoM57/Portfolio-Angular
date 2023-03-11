export class Experiencias {
    id?: number;
    puesto: String;
    lugar: String;
    inicio: String;
    fin: String;


constructor(puesto: String,lugar: String, inicio: String,fin: String){
    this.puesto = puesto;
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
}
}
