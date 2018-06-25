import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-sign-func',
  templateUrl: './sign-func.component.html',
  styleUrls: ['./sign-func.component.css']
})
export class SignFuncComponent implements OnInit {

  @Input() index : number;
  @Input() signsList : string;
  @Output() addSign = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createElement( thisSign : string, index : number ) : Element {
    return new Element( thisSign, index );
  }

  changeSign( item ){
    this.addSign.emit(
        this.createElement( item.value, this.index )
    )
  }
}
