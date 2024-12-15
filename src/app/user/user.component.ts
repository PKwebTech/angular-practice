import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: Boolean;
  @Output() getSelctedUser = new EventEmitter<string>();
  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelecteUser() {
    this.getSelctedUser.emit(this.user.id);
  }
}
