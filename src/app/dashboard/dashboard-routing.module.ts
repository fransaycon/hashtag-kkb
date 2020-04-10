import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'bill', component: BillComponent },
  { path: 'cart', component: CartComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
