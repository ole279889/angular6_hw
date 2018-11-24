import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: User;
  
  constructor(private userService: UserService, private router: Router) {
  
  }
  
  update() {
	this.router.navigate(['/users/form/' + this.user.id]);      
  }

  delete() {
    this.userService.deleteUser(this.user.id);
    this.userService.save();
  }

  show() {
	this.router.navigate(['/users/card/' + this.user.id]);    
  }
}
