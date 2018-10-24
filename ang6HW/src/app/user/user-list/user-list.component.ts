import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userDelete: EventEmitter<number> = new EventEmitter();
  
  userDel(uid: number) {
    this.userDelete.emit(uid); 	
  }
}
