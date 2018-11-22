import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  user: User;  
  constructor(private userService: UserService) {
	this.userService.viewId.subscribe((id: number) => {			
      this.user = this.userService.getUser(id);	 
    });  
  }
}
