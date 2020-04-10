import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddUsersComponent } from './add-users.component';

@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    AddUsersRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
})
export class AddUsersModule {}
