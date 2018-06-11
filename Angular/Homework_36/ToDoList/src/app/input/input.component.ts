import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() status;

  @Output() addElement = new EventEmitter();

  element;
  elemStatus : string;
  inputValue : string
  buttonDisable = true;

  constructor() {
    this.renew();
  }

  ngOnInit() {
  }

  addElementToList(){
    this.element = { name : this.inputValue, status : this.elemStatus};
    this.addElement.emit( this.element );
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
