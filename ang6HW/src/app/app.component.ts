import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { TranslationService } from './shared/translation.service';
import { TimeService } from './shared/time.service';

const LOCAL_STORAGE_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  constructor(private translationService: TranslationService, private timeService: TimeService) {
    var self = this; 
	setInterval(function() {
	  self.timeService.updTimeUTC()	
	}, 2000);
  }
  
}