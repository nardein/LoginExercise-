import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private router = inject(Router);

  email = '';
  password = '';

  goToRegister() {
    this.router.navigate(['register']);
  }

  onSubmit() {
    const userData = JSON.parse(window.localStorage.getItem('user') || '{}');
    if (userData.email === this.email && userData.password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedUser', JSON.stringify(userData));
      this.router.navigateByUrl('home');
    } else {
      alert('Email o password errati');
    }
  }
}
