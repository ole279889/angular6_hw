import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {UserService} from './shared/user.service';

@NgModule({
 imports: [
    FormsModule,//ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    UserListItemComponent,
	UserFormComponent,
    UserCardComponent,
    UserListComponent
  ],
  exports: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent
  ],
  providers: [
    //UserService,
  ]
})
export class UserModule { }