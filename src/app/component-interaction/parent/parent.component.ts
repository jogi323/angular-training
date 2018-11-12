import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  subscription: Subscription;
  public usersList: any[] = [{name: 'Joginaidu', age: 25}, {name: 'Ravi', age: 25}];
  public loggedInUserDetails: any;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }
  newUser(data) {
    console.log(data);
  }
}
