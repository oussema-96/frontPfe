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
      { name: 'Frank', type: 'Murphy', department: 'frank.murphy@test.com' },
      { name: 'Vic', type: 'Reynolds', department: 'vic.reynolds@test.com' },
      { name: 'Gina', type: 'Jabowski', department: 'gina.jabowski@test.com' },
      { name: 'Jessi', type: 'Glaser', department: 'jessi.glaser@test.com' },
      { name: 'Jay', type: 'Bilzerian', department: 'jay.bilzerian@test.com' }
    ];
  }

  ngOnInit(): void {
  }

}
