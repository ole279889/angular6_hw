import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../shared/app-validators';

@Component({
  selector: 'app-user-form-add',
  templateUrl: './user-form-add.component.html',
  styleUrls: ['./user-form-add.component.css']
})
export class UserFormAddComponent implements OnInit { 
  
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
  }
  
  onButtonClick() {	
  
    if (this.form.invalid) {
      return;
    }  
	
    this.userService.addUser(new User(
      this.userService.maxUID() + 1,
      this.form.get('family').value,
      this.form.get('name').value,
      this.form.get('surname').value
    ));
        
    this.userService.save();   
    this.form.reset();    
  }
}