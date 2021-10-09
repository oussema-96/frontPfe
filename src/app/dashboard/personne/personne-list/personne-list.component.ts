import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {

  personnes: any;

  constructor() {
    this.personnes = [
      { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', cin: 'User', gender: '', department: '', doors: 'porte1 , porte2, porte 3', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '', position: '' },
      { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', cin: 'Admin', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '', position: '' },
      { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', cin: 'Admin', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '', position: '' },
      { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', cin: 'User', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '', position: '' },
      { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', cin: 'User', gender: '', department: '', doors: '', cardNumber: '', birthDate: '', activationDate: '', expirationDate: '', position: '' }
    ];
  }

  ngOnInit(): void {
  }

}
