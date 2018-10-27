import { Injectable } from '@angular/core';
import { HEROES } from '../herosList';
import { Hero } from '../herosList';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public name = 'jogi';
  constructor() { }

  getHeroesList(): Observable<Hero[]> {
    return of(HEROES);
  }
}
