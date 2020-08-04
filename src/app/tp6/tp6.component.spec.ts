import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp6Component } from './tp6.component';

describe('Tp6Component', () => {
  let component: Tp6Component;
  let fixture: ComponentFixture<Tp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
