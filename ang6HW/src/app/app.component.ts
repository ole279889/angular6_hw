import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {UserListItemComponent} from './user/user-list-item/user-list-item.component';
import {User} from './shared/user.model';

const LOCAL_STORAGE_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User = null;
  users: User[];

  constructor() {
    this.users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    this.currentUser = this.getCurrentUser();
  }

  addUser() {
    this.users.push(this.currentUser);
    this.currentUser = this.getCurrentUser();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.users));
  }

  getCurrentUser() {
    return new User(this.users.length, '', '');
  }
}
