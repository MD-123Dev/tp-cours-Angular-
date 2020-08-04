import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormReactiveformComponent } from './signup-form-reactiveform.component';

describe('SignupFormReactiveformComponent', () => {
  let component: SignupFormReactiveformComponent;
  let fixture: ComponentFixture<SignupFormReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
