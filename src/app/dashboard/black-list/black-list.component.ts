import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.scss']
})
export class BlackListComponent implements OnInit {

  blackList: any;

  constructor() { }

  ngOnInit(): void {
    this.blackList = [
      { firstName: 'Frank', lastName: 'Murphy', cin: 'User',  cardNumber: '', date: '', porte: '' },
      { firstName: 'Vic', lastName: 'Reynolds', cin: 'Admin', cardNumber: '', date: '', porte: '' },
      { firstName: 'Gina', lastName: 'Jabowski', cin: 'Admin', cardNumber: '', date: '', porte: '' },
      { firstName: 'Jessi', lastName: 'Glaser', cin: 'User', cardNumber: '', date: '', porte: '' },
      { firstName: 'Jay', lastName: 'Bilzerian', cin: 'User', cardNumber: '', date: '', porte: '' }
    ];
  }

  reactivate() {
    
  }

}
