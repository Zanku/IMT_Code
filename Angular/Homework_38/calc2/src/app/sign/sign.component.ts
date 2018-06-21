import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  @Input()  sign : string;
  @Input() index : number;
  @Output() signInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSignInput( event ){
    this.signInput.emit( this.dataGeneration( event.target.value ) );
  }

  dataGeneration( aSign ){
    return new Element( aSign, this.index );
  }
}
