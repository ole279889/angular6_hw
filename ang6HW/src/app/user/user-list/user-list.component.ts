import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    
  constructor(private userService: UserService) {
	  
  }
  
  get users() {
    return this.userService.users;
  }
}
