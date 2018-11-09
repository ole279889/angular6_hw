import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() card: User;
  
  constructor(private userService: UserService) {
	  
  }
}
