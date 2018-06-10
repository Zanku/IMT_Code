import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()  name   : string;
  @Input()  status : string;
  @Input()  index  : number;

  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
