import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PostsComponent } from './posts/posts.component';
import { PracticeComponent } from './practice/practice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './life-cycles/user/user.component';
import { CommonPracticeComponent } from './common-practice/common-practice.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
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
  },
  { path: 'lazy-load1', loadChildren: './module1/module1.module#Module1Module'},
  { path: 'lazy-load2', loadChildren: './module2/module2.module#Module2Module'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
