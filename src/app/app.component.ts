import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedUserID !:string;
  onSelectUser(id: any) {
    this.selectedUserID = id;
  }
  get SelectedUser(){
   return this.users.find((ele:any)=>ele.id==this.selectedUserID)!;
  }
}
