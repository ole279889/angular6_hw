import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: User;
  @Output() userDel: EventEmitter<number> = new EventEmitter();
  @Output() userEdit: EventEmitter<number> = new EventEmitter();
  
  constructor(private userService: UserService) {
  
  }
  
  onButtonClickEditUser() {	  
    this.userEdit.emit(this.user.id);	
  }
  
  onButtonClickDelUser() {	
	this.userDel.emit(this.user.id);  	
  }
}
