import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEvalComponent } from './result-eval.component';

describe('ResultEvalComponent', () => {
  let component: ResultEvalComponent;
  let fixture: ComponentFixture<ResultEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
