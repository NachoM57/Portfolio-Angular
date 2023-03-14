export class Experiencias {
    id?: number;
    puesto: string;
    lugar: string;
    inicio: string;
    fin: string;


constructor(puesto: string,lugar: string, inicio: string,fin: string){
    this.puesto = puesto;
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
}
}
