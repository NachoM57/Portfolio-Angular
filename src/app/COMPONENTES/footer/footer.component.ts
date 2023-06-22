import { Component,OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { EmailService } from 'src/app/service/email.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email:Email;
  contactForm: FormGroup; 
 

  constructor(private formBuilder: FormBuilder, private contactFormService: EmailService) {
    this.contactForm = this.formBuilder.group({ // añade estas líneas
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  public enviarEmail() {
    if (this.contactForm.valid) {
      this.email = this.contactForm.value;
      console.log('Enviando email', this.email);
      this.contactFormService.sendContactForm(this.email)
        .subscribe(data => {
          console.log(data);
          alert("Email enviado correctamente. Me pondré en contacto pronto!")
          window.location.reload();
        }, error => {
          console.error('Error enviando el email', error);
        });
    } else {
      console.log('Formulario inválido');
    }
  }
  
  
    

  public onSubmit() {
    console.log('Formulario enviado');
    this.enviarEmail();
  }
  }   