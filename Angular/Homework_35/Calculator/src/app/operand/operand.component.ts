import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit {

  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}
