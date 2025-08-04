import { Routes } from '@angular/router';
import {Main} from './pages/main/main';
import {AccessDenied} from './shared/auth/page/access-denied/access-denied';

export const routes: Routes = [
  {
    path: '',
    component: Main
  },
  {
    path: 'access-denied',
    component: AccessDenied
  },
  {
    path: '**',
    redirectTo: ''
  }
];
