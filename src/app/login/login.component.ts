import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logiDetails: LoginForm;
  constructor(private appService: AppService) {
    this.logiDetails = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
    this.appService.announceMission('mission');
  }

  login() {
    // console.log(this.logiDetails);
    this.appService.setUserDetails(this.logiDetails);
  }

}

export interface LoginForm {
  username: string;
  password: string;
}
