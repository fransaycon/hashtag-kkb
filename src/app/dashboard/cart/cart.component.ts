import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/services/users/cart-item.interface';
import { MatDialog } from '@angular/material/dialog';
import { CartModalComponent } from 'src/app/shared/cart-modal/cart-modal.component';

export interface Item {
  user: User;
  name: string;
  quantity: number;
  cost: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  users: User[] = [];
  userChangedSubscription: Subscription;
  item: Item;
  cartItems: CartItem[] = [];
  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.cartItems = this.userService.getCartItems();
    this.userChangedSubscription = this.userService.usersChanged.subscribe(
      (users) => {
        this.users = users;
        this.cartItems = this.userService.getCartItems();
      }
    );
  }

  ngOnDestroy(): void {
    this.userChangedSubscription.unsubscribe();
  }

  openCartModal(): void {
    const dialogRef = this.dialog.open(CartModalComponent, {
      width: '300px',
      data: {
        item: this.item,
        users: this.users,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
