import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login-component.html',
  imports: [ReactiveFormsModule, RouterLink],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  submit() {
    if (this.loginForm.invalid) return;
    // call auth service
  }
}
