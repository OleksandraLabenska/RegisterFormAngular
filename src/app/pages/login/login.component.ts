import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  formularioLogin = this.formBuilder.group({
    email: ['',  Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required]
  });


  btnClick():void{
    console.log(this.formularioLogin.value.email);
    console.log(this.formularioLogin.value.password);
  }

  volverRegistro():void{
    this.router.navigate(['/home']);
  }

}
