import { ContactForm } from './../../model/contactForm';
import { HomeService } from './../../services/home.service'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router) {}

  ngOnInit(): void {
  }

  formularioRegistro = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['',  Validators.compose([Validators.email, Validators.required])],
    condiciones: [false, Validators.requiredTrue],

    password: ['', Validators.minLength(6)],
    confirm_password: ['', Validators.required] 
    
  },
  {
    validator: ConfirmedValidator('password', 'confirm_password')
  });


  get f(){
    return this.formularioRegistro.controls;
  }
   

  sendForm(): void {

    let value: ContactForm = new ContactForm(
      this.formularioRegistro.value.nombre,
      this.formularioRegistro.value.apellidos,
      this.formularioRegistro.value.telefono,
      this.formularioRegistro.value.email,
      this.formularioRegistro.value.direccion,
      this.formularioRegistro.value.localidad,
      this.formularioRegistro.value.provincia,
      this.formularioRegistro.value.password,
      this.formularioRegistro.value.confirm_password,
      this.formularioRegistro.value.condiciones
      );

    this.homeService.sendMessage(value);

    this.router.navigate(['/login']);
  }
}
