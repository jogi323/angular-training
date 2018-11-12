import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userList: any[];
  @Output() addNewUser = new EventEmitter();
  public data: any;
  constructor() {
    this.data = {
      name: '',
      age: null
    };
    console.log(this.userList);
  }

  ngOnInit() {
    console.log(this.userList);
    console.log(this.userList[0]);
  }
  submit(data) {
    console.log(data);
    this.addNewUser.emit(data);
  }
}
