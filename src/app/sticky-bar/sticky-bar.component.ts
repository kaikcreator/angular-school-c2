import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {

  public isSticky = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  private handleScroll($event:Event){
    if(($event.target as HTMLElement).children[0].scrollTop > 20 && !this.isSticky){
      this.isSticky = true;
    }
    else if(($event.target as HTMLElement).children[0].scrollTop <= 20 && this.isSticky){
      this.isSticky = false;
    }
  }  

}
