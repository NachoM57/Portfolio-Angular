import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  //codigo para volver arriba
scrolltoElement(selector:any){
const element=
document.querySelector(selector)
element ?
element.scrollIntoView({behavior:"smooth"}):null;

}


}
