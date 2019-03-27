import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contacts.model';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})
export class CodeTestComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
