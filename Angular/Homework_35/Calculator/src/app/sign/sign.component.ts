import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SingComponent implements OnInit {
  @Input() sign ;

  constructor() { }

  ngOnInit() {
  }

}
