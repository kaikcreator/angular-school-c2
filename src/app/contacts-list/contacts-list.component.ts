import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts:Contact[] = [];
  constructor() {
    this.contacts.push(new Contact(1, "Albert"));
    this.contacts.push(new Contact(2, "Beckie", null, [ { type:PhoneType.mobile, number:111223344 } ] ));
  }

  ngOnInit() {
  }

}
