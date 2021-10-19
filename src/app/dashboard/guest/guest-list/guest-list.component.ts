import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestEditComponent } from '../guest-edit/guest-edit.component';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  guests: any;

  constructor(public dialog: MatDialog) {
    this.guests = [
      { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', cin: 'User', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '' },
      { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', cin: 'Admin', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '' },
      { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', cin: 'Admin', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '' },
      { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', cin: 'User', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '' },
      { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', cin: 'User', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '' }
    ];
  }

  ngOnInit(): void {
  }

  openEditGuest(id) {
    this.dialog.open(GuestEditComponent, {
      data: { id: id },
    });
  }

  deleteGuest() {

  }

}
