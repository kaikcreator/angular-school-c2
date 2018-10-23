import { Component, OnInit, HostListener } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  public isStickyHeader:boolean = false;
  public contacts:Contact[] = [];
  constructor(public contactsService:ContactsService) { }

  @HostListener('window:scroll', ['$event'])
  private handleScroll($event:Event){
    if($event.srcElement.children[0].scrollTop > 20 && !this.isStickyHeader){
      this.isStickyHeader = true;
    }
    else if($event.srcElement.children[0].scrollTop <= 20 && this.isStickyHeader){
      this.isStickyHeader = false;
    }
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  onContactSelected(id:number){
    this.contactsService.selectContactById(id);
  }

}
