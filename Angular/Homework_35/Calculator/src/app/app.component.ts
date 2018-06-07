import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = "";
  sign = "";

  onInputChange( event ){
    this.value = event.target.value;
    console.log( this.value );
  }
}
