import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPracticeComponent } from './common-practice.component';

describe('CommonPracticeComponent', () => {
  let component: CommonPracticeComponent;
  let fixture: ComponentFixture<CommonPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
