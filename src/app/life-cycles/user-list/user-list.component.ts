import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  jokes: Joke[] = [];

  constructor() { }

  ngOnInit() {
    this.jokes.push({setup: 'What did the cheese say when it looked in the mirror', punchline: 'Hello', hide: false, toggle: function() {}});
  }

  addJoke() {
    this.jokes.unshift(
      new Joke(
        'What did the cheese say when it looked in the mirror',
        'Hello-me (Halloumi)'
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
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
