import { Component, OnInit } from '@angular/core';
import { HEROES } from '../herosList';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public herosList = HEROES;
  public title = 'CRICKET HEROES';
  constructor() {
    console.log(this.herosList);
   }

  ngOnInit() {
  }

}
