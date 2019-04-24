import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRouter2Component } from './sub-router2.component';

describe('SubRouter2Component', () => {
  let component: SubRouter2Component;
  let fixture: ComponentFixture<SubRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
