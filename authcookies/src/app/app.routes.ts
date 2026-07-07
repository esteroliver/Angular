import { Routes } from '@angular/router';
import { Register } from './features/register/register';
import { Login } from './features/login/login';
import { Home } from './features/home/home';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    component: Register,
    path: 'register'
  },
  {
    component: Login,
    path: 'login'
  },
  {
    component: Home,
    path: 'home',
    canActivate: [authGuard]
  }
];
