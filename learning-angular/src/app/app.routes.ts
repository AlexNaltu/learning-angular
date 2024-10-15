import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsProfileComponent } from './profile/settings-profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'page/:pageId',
    component: PageComponent,
  },
  {
    path: 'old-page/:pageId',
    redirectTo: (route) => {
      return `/page/${route.params['pageId']}`;
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'profile',
        component: SettingsProfileComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
