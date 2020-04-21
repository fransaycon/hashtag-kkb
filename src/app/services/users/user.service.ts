import User from './user.model';
import { Injectable } from '@angular/core';
import { Item } from '../cart/item.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  private users: User[] = [];
  usersChanged = new Subject<User[]>();

  getUsers(): User[] {
    return this.users;
  }

  addUser(name: string): void {
    const duplicateUser = this.users.filter((user) => user.getName() === name);
    if (!duplicateUser.length) {
      this.users = [...this.users, new User(name)];
      this.usersChanged.next(this.users);
    } else {
      window.alert('Teka lang! May kapangalan ang dinagdag mo. Dapat wala.');
    }
  }

  removeUser(user: User): void {
    this.users = this.users.filter((u) => u.getName() !== user.getName());
    this.usersChanged.next(this.users);
  }

  addItemToCart(user: User, item: Item): void {
    const userIndex = this.users.findIndex(
      (u) => u.getName() === user.getName()
    );
    this.users[userIndex].addItemToCart(item);
    this.usersChanged.next(this.users);
  }

  removeItemFromCart(user: User, item: Item): void {
    const userIndex = this.users.findIndex(
      (u) => u.getName() === user.getName()
    );
    this.users[userIndex].removeItemFromCart(item);
    this.usersChanged.next(this.users);
  }
}
