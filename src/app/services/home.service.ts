import { Injectable } from "@angular/core";
import { ContactForm } from "../model/contactForm";
@Injectable({
    providedIn: 'root'
})

export class HomeService{
    public sendMessage(form: ContactForm){
        console.log('El formulario ha sido enviado.');
        console.log(form);
    }
}

