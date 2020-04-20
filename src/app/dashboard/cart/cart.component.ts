import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CartModalComponent } from 'src/app/shared/cart-modal/cart-modal.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/services/cart/cart-item.interface';
import { Item } from 'src/app/services/cart/item.model';

interface ItemData {
  name: string;
  cost: number;
  quantity: number;
}

export interface CartItemData {
  user: User;
  item: ItemData;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  users: User[] = [];
  cart: CartItem[];
  userChangedSubscription: Subscription;
  cartChangedSubscription: Subscription;
  cartItemData: CartItemData | {} = {
    item: {},
  };
  total: number;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.userChangedSubscription = this.userService.usersChanged.subscribe(
      (users) => {
        this.users = users;
      }
    );
    this.cartChangedSubscription = this.cartService.cartChanged.subscribe(
      (cart) => {
        this.cart = cart;
        this.total = this.cartService.getTotal();
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
        cartItemData: this.cartItemData,
        users: this.users,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        const { item, user } = result.cartItemData;
        if (!!user && !!item.name && !!item.quantity && !!item.cost) {
          this.cartService.addToCart({
            user: result.cartItemData.user,
            item: new Item(item.name, item.quantity, item.cost),
          });
        }
      }
    });
  }

  removeCartItem(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem);
  }
}
