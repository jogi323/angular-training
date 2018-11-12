import { Injectable } from '@angular/core';
import { HEROES } from '../herosList';
import { Hero } from '../herosList';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public name = 'jogi';
  private loggedInUser = new BehaviorSubject<Object>({});

  constructor(private http: HttpClient) { }
  private missionAnnouncedSource = new BehaviorSubject<string>('');
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  announceMission(mission: string) {
    console.log(mission);
    this.missionAnnouncedSource.next(mission);
  }
  getHeroesList(): Observable<Hero[]> {
    return of(HEROES);
  }

  getUserDetails() {
    return this.loggedInUser.asObservable();
  }

  setUserDetails(data) {
    this.loggedInUser.next(data);
  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPosts(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', { title: 'Angular training', body: 'Angular 6 training classes' });
  }

  updatePost(): Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', {id: 1, title: 'Angular training', body: 'Angular 6 training classes' });
  }
  deletePost(): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/11');
  }
}
