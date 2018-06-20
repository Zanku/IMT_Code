import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperandComponent } from './operand.component';

describe('OperandComponent', () => {
  let component: OperandComponent;
  let fixture: ComponentFixture<OperandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
