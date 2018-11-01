import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserListComponent } from './life-cycles/user-list/user-list.component';
import { UserComponent } from './life-cycles/user/user.component';
import { PostsComponent } from './posts/posts.component';

import { AppRoutingModule } from './/app-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonPracticeComponent } from './common-practice/common-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserListComponent,
    UserComponent,
    PostsComponent,
    PracticeComponent,
    DashboardComponent,
    CommonPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
