import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login-component';
import { RegisterComponent } from './register/register-component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
