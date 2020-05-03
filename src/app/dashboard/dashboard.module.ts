import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users/users.component';
import { UserService } from '../services/users/user.service';
import { CartService } from '../services/cart/cart.service';

@NgModule({
  declarations: [
    BillComponent,
    CartComponent,
    DashboardComponent,
    UsersComponent,
  ],
  providers: [UserService, CartService],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
