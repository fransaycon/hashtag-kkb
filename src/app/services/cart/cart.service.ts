import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { CartItem } from './cart-item.interface';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  cart: CartItem[] = [];
  cartChanged = new Subject<CartItem[]>();
  total = 0;

  constructor(private userService: UserService) {}

  addToCart(cartItem: CartItem) {
    this.cart.push(cartItem);
    this.total += cartItem.item.getTotalCost();
    this.userService.addItemToCart(cartItem.user, cartItem.item);
    this.cartChanged.next(this.cart);
  }

  removeFromCart(cartItem: CartItem) {
    this.cart = this.cart.filter(
      (c) => c.item.getId() !== cartItem.item.getId()
    );
    this.total -= cartItem.item.getTotalCost();
    this.userService.removeItemFromCart(cartItem.user, cartItem.item);
    this.cartChanged.next(this.cart);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.total;
  }
}
