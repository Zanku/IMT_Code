import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SingComponent implements OnInit {
  @Input() sign ;
  @Output() signChanges = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
