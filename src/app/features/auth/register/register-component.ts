import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'register-component',
  templateUrl: './register-component.html',
  styleUrls: ['../auth.css'],
  imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
  });
}
