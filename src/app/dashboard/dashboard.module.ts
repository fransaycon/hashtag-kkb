import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    BillComponent,
    CartComponent,
    DashboardComponent,
    UsersComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
