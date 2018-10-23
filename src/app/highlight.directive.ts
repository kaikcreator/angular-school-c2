import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight') isHighlighted:boolean = false;
  
  constructor(private element:ElementRef) {  }

  ngOnChanges(){
    if(this.isHighlighted){
      this.element.nativeElement.childNodes[0].style.backgroundColor = '#fdf498'; 
    }else{
      this.element.nativeElement.childNodes[0].style.backgroundColor = ''; 
    }   
  }

}
