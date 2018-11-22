import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './shared/user.service';
import {TranslationService} from '../shared/translation.service';
import { TranslatePipe } from '../shared/translate.pipe';

@NgModule({
 imports: [
    ReactiveFormsModule,
	FormsModule,
    CommonModule,
  ],
  declarations: [
    UserListItemComponent,
	UserFormComponent,
    UserCardComponent,
    UserListComponent,	
	TranslatePipe,
  ],
  exports: [
    UserFormComponent,
    UserCardComponent,
    UserListComponent
  ],
  providers: [
    UserService,	
	TranslationService,
  ]
})
export class UserModule { }