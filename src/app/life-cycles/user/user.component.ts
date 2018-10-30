import {
  Component, Output,
  EventEmitter,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('joke') joke: Joke;
  constructor() {
    console.log(`new - data is ${this.joke}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.joke}`);
    console.log(this.joke);
//     for (let key in changes) {
//       console.log(`${key} changed.Current: ${changes[key].currentValue}.Previous: ${changes[key].previousValue}`);
//     }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.joke}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
