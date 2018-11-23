import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../shared/app-validators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  _userId: number;
  user: User;  
  form: FormGroup;
    
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [AppValidators.lettersOnly()]),
      surname: new FormControl('', [AppValidators.lettersOnly()]),
      family: new FormControl('', [AppValidators.lettersOnly()]),
    });		
  }
  
  ngOnInit(): void {    
	this._userId = Number(this.route.snapshot.params.id);
    this.user = this.userService.getUser(this._userId);   
    this.form.patchValue(this.user); 	
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
	this.userService.updateUser(this._userId, new User(
      this._userId,
      this.form.get('family').value,
      this.form.get('name').value,
      this.form.get('surname').value
    ));	
    this.userService.save();    
  }
  
}
