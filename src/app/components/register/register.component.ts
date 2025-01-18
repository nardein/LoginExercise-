import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private router = inject(Router);
  passwordValid = false;

  regExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/;

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.regExp),
    ]),
    ripetipassword: new FormControl('', Validators.required),
    sesso: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue),
  });

  goToLogin() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    console.log(this.form.value);
    const formData = this.form.value;
    window.localStorage.setItem('user', JSON.stringify(formData));
    window.localStorage.clear;
    this.router.navigateByUrl('login');
  }

  checkPassword() {
    const password = this.form.controls.password.value;
    const ripetiPassword = this.form.controls.ripetipassword.value;
    if (password && ripetiPassword && password === ripetiPassword) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }
  }

  passwordsMatch(): boolean {
    const password = this.form.get('password')?.value;
    const ripetiPassword = this.form.get('ripetipassword')?.value;
    return password === ripetiPassword;
  }
}
