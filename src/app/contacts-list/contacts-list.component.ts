import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public selectedContact:number = null;
  public contacts:Contact[] = [];
  constructor(public contactsService:ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  onContactSelected(id:number){
    this.selectedContact = this.selectedContact === id ? null : id;
  }

}
