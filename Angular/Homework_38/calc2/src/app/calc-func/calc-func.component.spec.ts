import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFuncComponent } from './calc-func.component';

describe('CalcFuncComponent', () => {
  let component: CalcFuncComponent;
  let fixture: ComponentFixture<CalcFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
