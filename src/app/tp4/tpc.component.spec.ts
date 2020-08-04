import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcComponent } from './tpc.component';

describe('Tp4Component', () => {
  let component: TpcComponent;
  let fixture: ComponentFixture<TpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
