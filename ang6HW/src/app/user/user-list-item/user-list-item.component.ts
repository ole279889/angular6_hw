import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: User;
  @Output() userDel: EventEmitter<number> = new EventEmitter();
  @Output() userEdit: EventEmitter<number> = new EventEmitter();
  
  onButtonClickEditUser() {	  
    this.userEdit.emit(this.user.id);	
  }
  
  onButtonClickDelUser() {	
	this.userDel.emit(this.user.id);  	
  }
}
