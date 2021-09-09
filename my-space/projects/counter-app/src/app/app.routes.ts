import { Routes } from '@angular/router';
import { IAmEagerComponent } from './modules/eager/components/i-am-eager/i-am-eager.component';
import { UserComponent } from './user/user.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'eager',
    component: IAmEagerComponent,
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
