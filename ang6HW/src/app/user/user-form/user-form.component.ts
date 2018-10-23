import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();

  onButtonClick() {
    this.userChange.emit(this.user);
  }
}
