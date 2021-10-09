import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne-history',
  templateUrl: './personne-history.component.html',
  styleUrls: ['./personne-history.component.scss']
})
export class PersonneHistoryComponent implements OnInit {

  histories:any;

  constructor() { }

  ngOnInit(): void {
    this.histories = [
      { firstName: 'Frank', lastName: 'Murphy', cin: 'User',  direction: '', date: '', porte: '', poste: '' },
      { firstName: 'Vic', lastName: 'Reynolds', cin: 'Admin', direction: '', date: '', porte: '', poste: '' },
      { firstName: 'Gina', lastName: 'Jabowski', cin: 'Admin', direction: '', date: '', porte: '', poste: '' },
      { firstName: 'Jessi', lastName: 'Glaser', cin: 'User', direction: '', date: '', porte: '', poste: '' },
      { firstName: 'Jay', lastName: 'Bilzerian', cin: 'User', direction: '', date: '', porte: '', poste: '' }
    ];
  }

}
