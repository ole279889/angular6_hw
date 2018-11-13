import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../shared/app-validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  _userId: number;
  user: User;  
  form: FormGroup;
    
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl('', [AppValidators.lettersOnly()]),
      surname: new FormControl('', [AppValidators.lettersOnly()]),
      family: new FormControl('', [AppValidators.lettersOnly()]),
    });		
  }
  
  ngOnInit(): void {
    this.userService.currentId.subscribe((id: number) => {
      this._userId = id;
      if(id) {
        this.form.patchValue(this.userService.getUser(id));
      }
    });    
  }
  
  get currentUser() {
    if (this.userService.currentId === null) {
      return new User(this.userService.users.length, '', '');
    }
    return this.userService.getUser(this.userService.currentId.getValue());
  }
  
  onButtonClick() {	
    if (this.form.invalid) {
      return;
    }  
	if (this._userId === null) {
      this.userService.addUser(new User(
        this.userService.maxUID() + 1,
        this.form.get('family').value,
        this.form.get('name').value,
        this.form.get('surname').value
      ));
    } else {
      this.userService.updateUser(this._userId, new User(
        this._userId,
        this.form.get('family').value,
        this.form.get('name').value,
        this.form.get('surname').value
      ));
    }
    this._userId = null;		
    this.userService.save();    
  }
  
}
