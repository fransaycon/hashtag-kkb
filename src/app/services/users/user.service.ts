import User from './user.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Item } from './item.model';
import { CartItem } from './cart-item.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  usersChanged = new EventEmitter<User[]>();

  getUsers(): User[] {
    return this.users;
  }

  addUser(name: string): void {
    const duplicateUser = this.users.filter((user) => user.getName() === name);
    if (!duplicateUser.length) {
      this.users = [...this.users, new User(name)];
      this.usersChanged.emit(this.users);
    } else {
      window.alert('Teka lang! May kapangalan ang dinagdag mo. Dapat wala.');
    }
  }

  removeUser(user: User): void {
    this.users = this.users.filter((u) => u.getName() !== user.getName());
    this.usersChanged.emit(this.users);
  }

  purchaseItem(user: User, name: string, quantity: number) {
    const userIndex = this.users.findIndex(
      (u) => u.getName() === user.getName()
    );
    if (userIndex >= 0) {
      const item = new Item(name, quantity);
      this.users[userIndex].addItemToCart(item);
      this.usersChanged.emit(this.users);
    } else {
      alert('User was not found! Please try again.');
    }
  }

  getCartItems(): CartItem[] {
    let items: CartItem[] = [];
    this.users.forEach((user) => {
      const cartItems: Item[] = user.getCart();
      items = [
        ...items,
        ...cartItems.map((ci) => ({
          userName: user.getName(),
          name: ci.getName(),
          quantity: ci.getQuantity(),
        })),
      ];
    });

    return items;
  }
}
