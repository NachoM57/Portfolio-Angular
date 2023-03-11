export class Email {
    id?: number;
    nombre: String;
    email: String;
    mensaje: String;
   

    constructor(nombre: String,email: String,mensaje: String){
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    }
}
