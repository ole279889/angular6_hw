import {Injectable} from '@angular/core';
import {User} from './user';
//import {BehaviorSubject} from 'rxjs';

//const LOCAL_STORAGE_KEY = 'users';

@Injectable()
export class UserService {
  getMsg(): number {
    return "12345";
  }
  /*private _users: User[];
  public currentId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public viewId: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  get users(): User[] {
    return this._users;
  }

  constructor() {
    this._users = (<User[]>JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []).map((item: any) => {
      return ObjectHelper.createFromObject(User, item);
    });
  }

  getUser(id: number): User {
    return this._users.find((user: User) => user.id === id);
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
  }*/
}