import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRouter1Component } from './sub-router1.component';

describe('SubRouter1Component', () => {
  let component: SubRouter1Component;
  let fixture: ComponentFixture<SubRouter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRouter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
