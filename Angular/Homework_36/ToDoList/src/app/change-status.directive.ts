import {Directive, ElementRef, HostListener, Input, ngAfterViewInit} from '@angular/core';

@Directive({
  selector: '[appChangeStatus]'
})
export class ChangeStatusDirective {
  @Input("appChangeStatus") status;

  constructor( private elem : ElementRef ) {

  }

  ngAfterViewInit(){
    this.cheak();
  }

  @HostListener("click") OnClick(){
    let i = this.cheak();
    i++;

    if ( i < this.status.length ){
      this.elem.nativeElement.style.backgroundColor = this.status[i].color;
      this.elem.nativeElement.firstChild.children[2].textContent = this.status[i].condition;
    }
  }

  cheak(){
    for (let i = 0; i < this.status.length; i++){
      if ( this.elem.nativeElement.firstChild.children[2].textContent == this.status[i].condition ){
        this.elem.nativeElement.style.backgroundColor = this.status[i].color;
        return i;
      }
    }
  }
}
