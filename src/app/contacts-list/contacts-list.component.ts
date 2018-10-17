import { Component, OnInit, ViewChildren, AfterViewInit, ChangeDetectorRef, QueryList } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ContactComponent) contactComponents:QueryList<ContactComponent>;
  public selectedContact:number = null;
  public contacts:Contact[] = [];
  constructor(public contactsService:ContactsService, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  ngAfterViewInit(){
    this.contactComponents.forEach( item => {
      console.log(item);
    });
  }

  onContactSelected(id:number){
    this.selectedContact = id;

    this.contactComponents.forEach(item => {
      if(item.contact.id === this.selectedContact){
        item.expanded = !item.expanded;
      }
      else{
        item.expanded = false;
      }
    });
  }

}
