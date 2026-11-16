import { Routes } from '@angular/router';
import { content } from './shared/routes/content.routes';
import { authen } from './shared/routes/auth.routes';
import { ContentLayout } from './shared/layouts/content-layout/content-layout';
import { AuthenticationLayout } from './shared/layouts/authentication-layout/authentication-layout';
export const routes: Routes = [
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../app/components/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'auth/login',
    loadComponent: () => import('../app/authentication/login/login').then((m) => m.Login),
  },
  { path: '', component: ContentLayout, children: content },
  { path: '', component: AuthenticationLayout, children: authen },
  { path: '**', redirectTo: '/error/error404', pathMatch: 'full' },
];
