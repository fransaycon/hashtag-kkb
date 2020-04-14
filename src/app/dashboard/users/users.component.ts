import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  usersChangedSubscription: Subscription;
  value: string = '';

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
    this.userService.addUser(this.value);
    this.value = '';
  }

  removeUser(user: User) {
    this.userService.removeUser(user);
  }
}
