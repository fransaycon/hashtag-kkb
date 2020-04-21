import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  usersChangedSubscription: Subscription;
  value = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.usersChangedSubscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

  ngOnDestroy(): void {
    this.usersChangedSubscription.unsubscribe();
  }

  addUser() {
    if (!!this.value) {
      this.userService.addUser(this.value);
      this.value = '';
    }
  }

  removeUser(user: User) {
    this.userService.removeUser(user);
  }
}
