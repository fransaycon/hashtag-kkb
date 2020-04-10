import { Component, OnInit } from '@angular/core';
import routes from '../routes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  addUserRoute: string = routes.ADD_USERS;

  constructor() {}

  ngOnInit(): void {}
}
