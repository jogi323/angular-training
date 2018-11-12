import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
// import { HEROES } from '../herosList';
import { AppService } from './../services/app.service' ;
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, OnDestroy {
  public data: Object;
  public herosList: any[] = [];
  public title = 'CRICKET HEROES';
  public selectedHero: Object;
  public myName: string;
  subscription: Subscription;
  public mission: any;
  public loggedInUserDetails: any;
  constructor(private appService: AppService) {
    this.data = {
      username: 'jogi',
      passowrd: ''
    };
    // this.subscription = this.appService.missionAnnounced$.subscribe(
    //   mission => {
    //     this.mission = mission;
    // });
    this.subscription = this.appService.getUserDetails().subscribe((data) => {
      this.loggedInUserDetails = data;
    });
   }
  ngOnInit() {
    this.myName = this.appService.name;
    this.appService.getHeroesList().subscribe((res) => {
      this.herosList = res;
    });
    // console.log(this.herosList);
  }
  submit(name) {
    console.log(this.data);
    console.log(name);
  }

  select(hero) {
    this.selectedHero = hero;
  }

  trackedValue(index, item) {
    if (index === 1) {
      item.name = 'Jogi';
    }
    return item;
  }
  ngOnChanges(change) {
    console.log(change);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
