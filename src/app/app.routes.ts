import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Layout} from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  }
];