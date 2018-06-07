import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = "Result";
  first = "";
  second = "";


  onBtnClick(){
    const STRING_WARNING = "NUMBER must be here";
    let first = Number(this.first);
    let second = Number(this.second);
    let warn = false;

    if ( Object.is( first, NaN ) ){
      this.first = STRING_WARNING;
      warn = true;
    }
    if ( Object.is( first, NaN ) ) {
      this.second = STRING_WARNING;
      warn = true;
    }
    if ( warn === true ){
      return
    }

    this.result = String( first + second );
  }

  onFocus( event ){
    if ( Object.is( Number(event.target.value), NaN ) ) {
      event.target.value = "";
    }
  }

  eventsDefinition( event ){
    //console.log( event.target.tagName );
    switch ( event.target.tagName  ){

      case "INPUT" :
          this.onFocus( event );
        break;

      case "BUTTON" :
          this.onBtnClick();
        break;
    }
  }
}

