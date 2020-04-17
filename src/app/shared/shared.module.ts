import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CartModalComponent } from './cart-modal/cart-modal.component';
import { UserService } from '../services/users/user.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CartModalComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [CartModalComponent],
})
export class SharedModule {}
