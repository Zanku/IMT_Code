import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit {

  @Input() aValue : string;
  @Input() index : number;
  @Output() changeEvent = new EventEmitter();

  element : Element;

  constructor() { }

  ngOnInit() {
  }

  onElementChange( event ){
    this.element = new Element( event.target.value, this.index );
    this.changeEvent.emit( this.element );
  }
}
