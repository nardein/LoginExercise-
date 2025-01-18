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
    accetto: new FormControl(false, Validators.required),
  });

  goToLogin() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  checkPassword(e: string) {
    if (e === this.form.controls.password.value) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }
  }
  checkForm(): boolean {
    if (this.form.valid && this.passwordValid) {
      return false;
    } else {
      return true;
    }
  }
}
