import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  _userId: number;	
  user: User;  
    
  constructor(private userService: UserService) {
    this.userService.currentId.subscribe((id: number) => {	
      this._userId = id;		  
      this.user = this.userService.getUser(id);		  
    });
  }
    
  onButtonClick() {	    
	if (this._userId === null) {
      this.userService.addUser(new User(
        this.userService.maxUID() + 1,
        this.user.family,
        this.user.name,
        this.user.surname
      ));
    } else {
      this.userService.updateUser(this._userId, new User(
        this._userId,
        this.user.family,
        this.user.name,
        this.user.surname
      ));
    }
    this._userId = null;	
	this.user = this.userService.getUser(this._userId);
    this.userService.save();    
  }
  
}
