import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() counting = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startCounting(){
    this.counting.emit();
  }
}
