import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignFuncComponent } from './sign-func.component';

describe('SignFuncComponent', () => {
  let component: SignFuncComponent;
  let fixture: ComponentFixture<SignFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
