import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit {
  @Input() value;
  @Input() count;
  @Input() warn;

  constructor() {
  }

  ngOnInit() {
  }

}
