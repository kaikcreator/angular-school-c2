import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() expanded: boolean = false;

  constructor(public parent:ContactsListComponent) { }

  ngOnInit() {
  }

}
