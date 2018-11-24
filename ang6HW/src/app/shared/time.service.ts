import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest, HttpXhrBackend} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {dtUTC} from './dtutc';

class HttpHandler extends HttpXhrBackend {

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return super.handle(req);
  }
}

@Injectable()
export class TimeService {
	
  public timeUTC = '__:__';
  
  constructor(private http: HttpClient) {}

  updTimeUTC() {
    let request = this.http.get('http://worldclockapi.com/api/json/utc/now', {responseType: 'json'});    
	request.subscribe((dateTimeUTC : dtUTC) => {
	  this.timeUTC = dateTimeUTC.currentDateTime.substring(11, 16);       		
    },
	error => {
	  this.timeUTC = '__:__';
	  console.log("Error getting UTC date/time")
	});	 
  }
  
}