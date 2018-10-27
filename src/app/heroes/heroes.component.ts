import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../herosList';
import { AppService } from './../services/app.service' ;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public data: Object;
  public herosList: any[] = [];
  public title = 'CRICKET HEROES';
  public selectedHero: Object;

  constructor(private appService: AppService) {
    this.data = {
      username: 'jogi',
      passowrd: ''
    };
   }

  ngOnInit() {
    this.appService.getHeroesList().subscribe((res) => {
      this.herosList = res;
    });
    console.log(this.herosList);
  }
  submit(name) {
    console.log(this.data);
    console.log(name);
  }

  select(hero) {
    this.selectedHero = hero;
  }
}
