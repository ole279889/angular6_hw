import {NgModule} from '@angular/core';
import {UserModule} from './user/user.module';
import {RouterModule} from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserCardComponent} from './user/user-card/user-card.component';

@NgModule({
  imports: [
    UserModule,
    RouterModule.forRoot([
      {
        path: 'users', children: [
          {path: '', component: UserListComponent},
          {path: 'form', component: UserFormComponent},
          {path: 'card/:id', component: UserCardComponent},
        ]
      }
    ]),
  ],
})
export class AppRoutingModule {}
