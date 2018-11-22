import {Injectable} from '@angular/core';
import {User} from './user.model';
import {BehaviorSubject} from 'rxjs';
const LOCAL_STORAGE_KEY = 'users';

@Injectable()
export class UserService {
  private _users: User[];  
  public currentId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public viewId: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  get users(): User[] {
    return this._users;
  }

  constructor() {
    this._users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  }

  getUser(id: number = null): User {
	if (id === null) {		
	  return new User(this.maxUID() + 1, '', '', '');
	} else {		
      return this._users.find((user: User) => user.id === id);
	}
  }

  addUser(user: User) {
    this._users.push(user);
  }

  updateUser(id: number, user: User) {
    this._users[this._users.findIndex((item: User) => item.id === id)] = user;
  }

  deleteUser(id: number) {
    this._users.splice(this._users.findIndex((item: User) => item.id === id), 1);
  }

  save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._users));	
  }  
  
  maxUID() {	  
	if (this._users.length == 0) {
	  return 0;
	} 
	else if (this._users.length == 1) {
	  return this._users[0].id;
	} 
	else{
      var result = this.users.reduce(function (p, v) {
        return ( p.id > v.id ? p : v );
      });	  
	  return result.id;
    }  
  }
  
}