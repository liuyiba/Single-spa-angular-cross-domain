import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2SubRouter1Component } from './app2-sub-router1.component';

describe('App2SubRouter1Component', () => {
  let component: App2SubRouter1Component;
  let fixture: ComponentFixture<App2SubRouter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2SubRouter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2SubRouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
