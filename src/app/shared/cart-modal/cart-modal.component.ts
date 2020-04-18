import { Component, OnInit, Inject } from '@angular/core';
import User from 'src/app/services/users/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartItemData } from 'src/app/dashboard/cart/cart.component';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { users: User[]; cartItemData: CartItemData }
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }
}
