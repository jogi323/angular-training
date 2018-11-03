import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1Component } from './module1.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path : '', children: [
    { path: '', component: Module1Component },
    { path: 'test', component: TestComponent }
  ] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
