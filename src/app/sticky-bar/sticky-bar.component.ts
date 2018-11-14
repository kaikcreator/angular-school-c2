import { Component, OnInit, HostListener, ContentChild } from '@angular/core';
import { BarButtonComponent } from '../bar-button/bar-button.component';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {

  @ContentChild('barHeader') barHeader;
  public isSticky = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.barHeader);
  }

  @HostListener('window:scroll', ['$event'])
  private handleScroll($event:Event){
    if($event.srcElement.children[0].scrollTop > 20 && !this.isSticky){
      this.isSticky = true;
    }
    else if($event.srcElement.children[0].scrollTop <= 20 && this.isSticky){
      this.isSticky = false;
    }
  }  

}
