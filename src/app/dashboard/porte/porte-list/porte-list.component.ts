import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porte-list',
  templateUrl: './porte-list.component.html',
  styleUrls: ['./porte-list.component.scss']
})
export class PorteListComponent implements OnInit {

  portes: any;

  constructor() {
    this.portes = [
      { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
      { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
      { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
      { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
      { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
    ];
  }

  ngOnInit(): void {
  }

}
