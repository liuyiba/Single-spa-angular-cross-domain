import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2SubRouter2Component } from './app2-sub-router2.component';

describe('App2SubRouter2Component', () => {
  let component: App2SubRouter2Component;
  let fixture: ComponentFixture<App2SubRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2SubRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2SubRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
