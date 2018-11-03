import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';

import { Module1RoutingModule } from './module1-routing.module';
import { TestComponent } from './test/test.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Module1Component, TestComponent, MyProfileComponent]
})
export class Module1Module { }
