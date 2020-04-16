import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import User from 'src/app/services/users/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  users: User[] = [];
  userChangedSubscription: Subscription;
  selectedValue: User;
  itemNameInput: string;
  itemQuantityInput: number;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.userChangedSubscription = this.userService.usersChanged.subscribe(
      (users) => {
        this.users = users;
      }
    );
  }

  submit() {
    if (this.selectedValue && this.itemNameInput && this.itemQuantityInput) {
      this.userService.purchaseItem(
        this.selectedValue,
        this.itemNameInput,
        this.itemQuantityInput
      );
      this.selectedValue = null;
      this.itemNameInput = null;
      this.itemQuantityInput = null;
    }
  }
}
