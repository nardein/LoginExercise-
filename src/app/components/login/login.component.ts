import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router= inject(Router);

  email='';
  password='';

  goToRegister(){
    this.router.navigate(['register']);
  }

  formValid(){

  }

  onSubmit(){

  }

}
