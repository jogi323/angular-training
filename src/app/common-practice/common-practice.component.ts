import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../services/app.service' ;
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-practice',
  templateUrl: './common-practice.component.html',
  styleUrls: ['./common-practice.component.css']
})
export class CommonPracticeComponent implements OnInit {

  title = 'app';
  public name = 'Ravi';
  public showName: any[] = [];
  public list: any[] = ['Jogi', 'Ravi', 'Virat'];
  public listObj: any[] = [{name: 'jogi', age: 25}, {name: 'Ravi', age: 25}, {name: 'Virat', age: 29}];
  public department: string;
  constructor(private appService: AppService, private modalService: NgbModal, private router: Router) {
    this.department = 'UI';
    console.log(this.appService.name);
   }

  ngOnInit() {
  }
  submit() {
    console.log('object');
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(reason);

    });
  }
  navigateToLife() {
    this.router.navigate(['/practice/lifecycle']);
  }
}
