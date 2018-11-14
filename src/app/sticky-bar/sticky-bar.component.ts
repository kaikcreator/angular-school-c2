import { Component, OnInit, HostListener, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { BarButtonComponent } from '../bar-button/bar-button.component';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {

  @ContentChild('barHeader') barHeader;
  @ContentChildren(BarButtonComponent) barButtons: QueryList<BarButtonComponent>;
  public isSticky = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log(this.barHeader);
    this.barButtons.forEach(item => {
      console.log(item);
      item.button.nativeElement.disabled = true;
    });
  }

  @HostListener('window:scroll', ['$event'])
  private handleScroll($event: Event) {
    if (($event.target as HTMLElement).children[0].scrollTop > 20 && !this.isSticky) {
      this.isSticky = true;
    } else if (($event.target as HTMLElement).children[0].scrollTop <= 20 && this.isSticky) {
      this.isSticky = false;
    }
  }

}
