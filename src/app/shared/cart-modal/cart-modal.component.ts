import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/dashboard/cart/cart.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
  users: User[] = [];
  userChangedSubscription: Subscription;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { users: User[]; item: Item }
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.userChangedSubscription = this.userService.usersChanged.subscribe(
      (users) => {
        this.users = users;
      }
    );

    console.log(this.data);
  }

  ngOnDestroy(): void {
    this.userChangedSubscription.unsubscribe();
  }

  cancel() {
    this.dialogRef.close();
  }
}
