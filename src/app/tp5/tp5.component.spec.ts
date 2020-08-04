import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp5Component } from './tp5.component';

describe('Tp5Component', () => {
  let component: Tp5Component;
  let fixture: ComponentFixture<Tp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
