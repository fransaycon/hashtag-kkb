import { Injectable, EventEmitter } from '@angular/core';
import { UserService } from '../users/user.service';
import { CartItem } from './cart-item.interface';

@Injectable()
export class CartService {
  cart: CartItem[] = [];
  cartChanged = new EventEmitter<CartItem[]>();
  total: number = 0;

  constructor(private userService: UserService) {}

  addToCart(cartItem: CartItem) {
    this.cart.push(cartItem);
    this.total += cartItem.item.getTotalCost();
    this.userService.addItemToCart(cartItem.user, cartItem.item);
    this.cartChanged.emit(this.cart);
  }

  removeFromCart(cartItem: CartItem) {
    this.cart = this.cart.filter(
      (c) => c.item.getId() !== cartItem.item.getId()
    );
    this.total -= cartItem.item.getTotalCost();
    this.userService.removeItemFromCart(cartItem.user, cartItem.item);
    this.cartChanged.emit(this.cart);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.total;
  }
}
