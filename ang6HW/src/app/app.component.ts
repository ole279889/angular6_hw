import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { TranslationService } from './shared/translation.service';

const LOCAL_STORAGE_KEY = 'users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  constructor(private translationService: TranslationService) {
    
  }
 
}