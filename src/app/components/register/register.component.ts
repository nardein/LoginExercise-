import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  regExp= /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/;

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(this.regExp)]),
    ripetipassword: new FormControl('',Validators.required),
    sesso: new FormControl('',Validators.required),
    accetto: new FormControl(false, Validators.required)
  })

  onSubmit(){

  }
}
