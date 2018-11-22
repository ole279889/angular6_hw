import { BrowserModule } from '@angular/platform-browser';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import {TimeService} from './shared/time.service';
import {TranslationService} from './shared/translation.service';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,         
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
	UserModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [    
	TimeService,
	TranslationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
