import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpbComponent } from './tpb.component'; 

describe('TpbComponent', () => {
  let component: TpbComponent;
  let fixture: ComponentFixture<TpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
