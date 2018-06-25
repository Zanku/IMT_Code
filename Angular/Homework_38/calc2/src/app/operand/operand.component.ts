import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent {

  @Input() aValue : string;
  @Input() index : number;
  @Output() changeEvent = new EventEmitter();

  element : Element;

  constructor() { }

  ngOnInit() {
  }

  onElementChange( item ){
    this.createElement( item );
    this.changeEvent.emit( this.element );
  }

  createElement( item ){
    this.element = new Element( item.value, this.index );
  }
}
