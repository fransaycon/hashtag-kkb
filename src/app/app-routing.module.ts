import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import routes from './routes';

const appRoutes: Routes = [
  {
    path: routes.HOMEPAGE,
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: routes.ADD_USERS,
    loadChildren: () =>
      import('./add-users/add-users.module').then((m) => m.AddUsersModule),
  },
  {
    path: routes.DASHBOARD,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
