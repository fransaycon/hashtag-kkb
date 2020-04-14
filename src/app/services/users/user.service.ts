import User from './user.model';
import { Injectable, EventEmitter } from '@angular/core';

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
}
