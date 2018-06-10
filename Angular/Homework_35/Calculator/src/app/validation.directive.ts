import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appValidation]'
})



export class ValidationDirective {

  constructor( private elem : ElementRef ) {}

  @HostListener("input") onInput(){
    this.validation();
  }

  validation(){
    this.functionDefinition();
  }

  digitsValidation(){
    this.elem.nativeElement.value = this.elem.nativeElement.value.replace(/[^0-9]*/g, "");
  }

  signValidation(){
    this.elem.nativeElement.value = this.elem.nativeElement.value.replace(/[\w]/g, "");
  }

  functionDefinition(){
    switch ( this.elem.nativeElement.placeholder ){
      case "Sign" :
        this.signValidation()
            break;
      case "Digits" :
        this.digitsValidation();
        break;
      default :
        console.log("something WRONG");
    }
  }
}
