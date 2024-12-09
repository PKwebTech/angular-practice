import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomIndex];
  constructor() { }
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  }
  onSelecteUser(){
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
