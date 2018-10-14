import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = 'Ravi';
  public showName: any[] = [];
  public list: any[] = ['Jogi', 'Ravi', 'Virat'];
  public listObj: any[] = [{name: 'jogi', age: 25}, {name: 'Ravi', age: 25}, {name: 'Virat', age: 29}];
  public department: string;
  constructor() {
    this.department = 'UI';
  }

  submit() {
    console.log('object');
  }
}
