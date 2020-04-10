import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkbStartComponent } from './kkb-start/kkb-start.component';
import { KkbUsersComponent } from './kkb-users/kkb-users.component';
import routes from './routes';

const appRoutes: Routes = [
  { path: routes.HOMEPAGE, component: KkbStartComponent },
  { path: routes.ADD_USERS, component: KkbUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
