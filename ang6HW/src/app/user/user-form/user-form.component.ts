import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User;
  @Input() del: boolean;
  @Output() userChange: EventEmitter<User> = new EventEmitter();
  @Output() StopEdit: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private userService: UserService) {
    
  }
  
  onStopEdit() {	 
    this.StopEdit.emit(true);
  }
  onButtonClick() {
	alert(this.userService.getMsg());  
    this.userChange.emit(this.user);
  }
}
