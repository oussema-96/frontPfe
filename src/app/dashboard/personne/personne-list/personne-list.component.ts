import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonneService } from 'src/app/services/entities/personne.service';
import { PersonneEditComponent } from '../personne-edit/personne-edit.component';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {

  personnes;

  constructor(public dialog: MatDialog, private personneService: PersonneService) {
  }

  ngOnInit(): void {
    this.getPersonnes();
  }

  async getPersonnes() {
    this.personnes = await this.personneService.getListPersonnes();
  }

  openEditPersonne(id) {
    this.dialog.open(PersonneEditComponent, {
      data: { id: id },
    });
  }

  deletePersonne(id) {
    this.personneService.deletePersonne(id)
    .then(() => {this.ngOnInit()});
  }

}
