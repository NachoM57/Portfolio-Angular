import { Component,OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { EmailService } from 'src/app/service/email.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email: Email[] = [];
  

  constructor(private emailService: EmailService,public router: Router,private http: HttpClient) {}

 

 ngOnInit(): void  {
 this.agregarEmail();
 }

agregarEmail(): void{
this.emailService.lista().subscribe(data => {this.email = data;})
}








}