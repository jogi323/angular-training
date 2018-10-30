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
  public myName: string;

  constructor(private appService: AppService) {
    this.data = {
      username: 'jogi',
      passowrd: ''
    };
    console.log(this.appService.name);
   }

  ngOnInit() {
    this.myName = this.appService.name;
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
