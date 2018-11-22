import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: User;
  
  constructor(private userService: UserService) {
  
  }
  
  update() {
    this.userService.currentId.next(this.user.id);
	this.userService.viewId.next(this.user.id);	
  }

  delete() {
    this.userService.deleteUser(this.user.id);
    this.userService.save();
  }

  /*show() {
    this.userService.viewId.next(this.user.id);
  }*/
}
