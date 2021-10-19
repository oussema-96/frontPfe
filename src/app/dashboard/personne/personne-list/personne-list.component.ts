import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonneEditComponent } from '../personne-edit/personne-edit.component';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {

  personnes: any;

  constructor(public dialog: MatDialog) {
    this.personnes = [
      { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', cin: '1615464', gender: 'Homme', mobilePhone: '31164545', department: 'Service Commercial', doors: 'Tous les portes', cardNumber: 'lfnvem+6662re+6', birthDate: '15/02/1987', activationDate: '17/03/2009', expirationDate: '26/03/2017', position: 'Manager' },
      { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', cin: '135641351', gender: 'Homme', mobilePhone: '6464684', department: 'Service Commercial', doors: 'Tous les portes', cardNumber: 'uzilrngefr315', birthDate: '26/02/1991', activationDate: '06/07/2010', expirationDate: '30/09/2030', position: 'Ingénieur' },
      { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', cin: '35435635', gender: 'Femme', mobilePhone: '89684645', department: 'Marketing', doors: 'Tous les portes', cardNumber: 'fzefz3521f1', birthDate: '23/04/1997', activationDate: '20/12/2013', expirationDate: '20/12/2020', position: 'Ingénieur' },
      { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', cin: '135465', gender: 'Femme', mobilePhone: '86435164', department: 'Direction finacière', doors: 'DF1, DF2, DF3, DF4', cardNumber: 'efz35r1r', birthDate: '24/05/1993', activationDate: '01/06/2007', expirationDate: '10/06/2010', position: 'Ouvrier' },
      { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', cin: '1332052', gender: 'Femme', mobilePhone: '64635653', department: 'Service industriel', doors: 'SI1, SI2', cardNumber: 'jbjbev6534fs', birthDate: '17/08/1995', activationDate: '19/02/2003', expirationDate: '19/02/2010', position: 'Ouvri' }
    ];
  }

  ngOnInit(): void {
  }

  openEditPersonne(id) {
    this.dialog.open(PersonneEditComponent, {
      data: { id: id },
    });
  }

  deletePersonne() {

  }

}
