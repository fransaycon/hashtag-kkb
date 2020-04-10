import { Component, OnInit } from '@angular/core';
import routes from '../routes';

@Component({
  selector: 'app-kkb-start',
  templateUrl: './kkb-start.component.html',
  styleUrls: ['./kkb-start.component.scss'],
})
export class KkbStartComponent implements OnInit {
  addUserRoute: string = routes.ADD_USERS;

  constructor() {}

  ngOnInit(): void {}
}
