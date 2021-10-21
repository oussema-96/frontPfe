import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuestService } from 'src/app/services/entities/guest.service';
import { GuestEditComponent } from '../guest-edit/guest-edit.component';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  guests: any;

  constructor(public dialog: MatDialog, private guestService: GuestService) {
  }

  ngOnInit(): void {
    this.getGuests();
  }
  
  async getGuests() {
    this.guests = await this.guestService.getListGuests();
  }

  openEditGuest(id) {
    this.dialog.open(GuestEditComponent, {
      data: { id: id },
    });
  }

  deleteGuest(id) {
    this.guestService.deleteGuest(id)
    .then(() => {this.ngOnInit()});
  }

}
