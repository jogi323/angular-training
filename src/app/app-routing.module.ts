import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PostsComponent } from './posts/posts.component';
import { PracticeComponent } from './practice/practice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './life-cycles/user/user.component';
import { CommonPracticeComponent } from './common-practice/common-practice.component';

const routes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'posts', component: PostsComponent   },
  { path: 'practice', component: PracticeComponent, children: [
      {
        path: '', component: CommonPracticeComponent, pathMatch: 'full'
      },
      {
        path: 'lifecycle', component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
