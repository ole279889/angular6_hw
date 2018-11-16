import { BrowserModule } from '@angular/platform-browser';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {UserService} from './shared/user.service';
import {TranslationService} from './shared/translation.service';

@NgModule({
  declarations: [
    AppComponent,         
  ],
  imports: [
    BrowserModule,
	UserModule,
	FormsModule,
  ],
  providers: [
    UserService,
	TranslationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
