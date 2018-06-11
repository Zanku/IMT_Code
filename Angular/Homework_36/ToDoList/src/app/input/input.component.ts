import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { List } from ".././list";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() status;

  @Output() addElement = new EventEmitter();


  elemStatus : string;
  inputValue : string;
  buttonDisable = true;

  constructor() {
    this.renew();
  }

  ngOnInit() {
  }

  addElementToList(){
    this.addElement.emit( new List(this.inputValue, this.elemStatus) );
    this.renew();
  }

  renew(){
    this.inputValue = "";
    this.elemStatus = "";
    this.toggleDisableButton();
  }

  toggleDisableButton(){
    if ( this.inputValue === "" || this.elemStatus === ""){
        this.buttonDisable = true;
    } else {
        this.buttonDisable = false;
    }
  }


}
