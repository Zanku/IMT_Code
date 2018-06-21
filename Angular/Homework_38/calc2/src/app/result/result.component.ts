import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result;
  @Output() onBtnResultClick = new EventEmitter();
  @Output() onBtnClearClick = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onResultBtnClick(){
    this.onBtnResultClick.emit();
  }

  onClearBtnClick(){
    this.onBtnClearClick.emit();
  }
}
