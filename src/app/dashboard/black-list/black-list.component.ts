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
      { id: 1, firstName: 'Frank', lastName: 'Murphy', cin: 'User',  cardNumber: '', date: '', porte: '' },
      { id: 2, firstName: 'Vic', lastName: 'Reynolds', cin: 'Admin', cardNumber: '', date: '', porte: '' },
      { id: 3, firstName: 'Gina', lastName: 'Jabowski', cin: 'Admin', cardNumber: '', date: '', porte: '' },
      { id: 4, firstName: 'Jessi', lastName: 'Glaser', cin: 'User', cardNumber: '', date: '', porte: '' },
      { id: 5, firstName: 'Jay', lastName: 'Bilzerian', cin: 'User', cardNumber: '', date: '', porte: '' }
    ];
  }

  reactivate(id) {
    this.blackList.forEach(element => {
      if(element.id === id) {
        let index = this.blackList.indexOf(element);
        this.blackList.splice(index, 1);
      }
    });
  }

}
