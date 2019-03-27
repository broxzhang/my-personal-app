import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contacts.model';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {
 public contactSelected = false;
  public contacts: Contact[] = [];
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
        console.log(this.contacts);
      });
  }

}
