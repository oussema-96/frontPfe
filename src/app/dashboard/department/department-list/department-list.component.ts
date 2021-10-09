import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: any;

  constructor() {
    this.departments = [
      { Name: 'Service Commercial', Doors: 'SC1, SC2, SC3, SC4, SC5, SC6' },
      { Name: 'Marketing', Doors: 'M1, M2, M3, M4, M5, M6'  },
      { Name: 'Direction finacère', Doors: 'DF1, DF2, DF3, DF4, DF5, DF6'  },
      { Name: 'Service industriel', Doors: 'SI1, SI2, SI3, SI4, SI5, SI6'  },
      { Name: 'Ressources humaines', Doors: 'RH1, RH2, RH3, RH4, RH5, RH6' }
    ];
  }

  ngOnInit(): void {
  }

}
