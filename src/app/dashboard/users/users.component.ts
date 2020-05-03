import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  usersChangedSubscription: Subscription;
  userForm: FormGroup;
  nameControl = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.usersChangedSubscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userForm = new FormGroup({
      name: this.nameControl,
    });
  }

  ngOnDestroy(): void {
    this.usersChangedSubscription.unsubscribe();
  }

  addUser() {
    if (!!this.nameControl.value) {
      this.userService.addUser(this.nameControl.value);
      this.onCancel();
    }
  }

  onCancel() {
    this.userForm.reset();
  }

  removeUser(user: User) {
    this.userService.removeUser(user);
  }
}
