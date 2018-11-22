import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  user: User;  
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {    
    this.user = this.userService.getUser(Number(this.route.snapshot.params.id));   
  }
}
