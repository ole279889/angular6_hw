import { BrowserModule } from '@angular/platform-browser';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
//import {UserService} from './user/shared/user.service';

@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  imports: [
    BrowserModule,
	UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
