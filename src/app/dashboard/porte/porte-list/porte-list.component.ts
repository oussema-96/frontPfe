import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PorteAddComponent } from '../porte-add/porte-add.component';

@Component({
  selector: 'app-porte-list',
  templateUrl: './porte-list.component.html',
  styleUrls: ['./porte-list.component.scss']
})
export class PorteListComponent implements OnInit {

  portes: any;

  constructor(public dialog: MatDialog) {
    this.portes = [
      { name: 'SI1', type: 'Entrée', department: 'Service Industriel' },
      { name: 'SI1', type: 'Sortie', department: 'Service Industriel' },
      { name: 'SI2', type: 'Entrée', department: 'Service Industriel' },
      { name: 'SI2', type: 'Sortie', department: 'Service Industriel' },
      { name: 'SI3', type: 'Entrée', department: 'Service Industriel' },
      { name: 'SI3', type: 'Sortie', department: 'Service Industriel' },
      { name: 'SI4', type: 'Entrée', department: 'Service Industriel' },
      { name: 'SI4', type: 'Sortie', department: 'Service Industriel' },
      { name: 'M1', type: 'Entrée', department: 'Marketing' },
      { name: 'M1', type: 'Sortie', department: 'Marketing' },
      { name: 'M2', type: 'Entrée', department: 'Marketing' },
      { name: 'M2', type: 'Sortie', department: 'Marketing' },
      { name: 'M3', type: 'Entrée', department: 'Marketing' },
      { name: 'M3', type: 'Sortie', department: 'Marketing' },
      { name: 'M4', type: 'Entrée', department: 'Marketing' },
      { name: 'M4', type: 'Sortie', department: 'Marketing' },
      { name: 'DF1', type: 'Entrée', department:'Direction Finacière' },
      { name: 'DF1', type: 'Sortie', department:'Direction Finacière' },
      { name: 'DF2', type: 'Entrée', department:'Direction Finacière' },
      { name: 'DF2', type: 'Sortie', department:'Direction Finacière' },
      { name: 'DF3', type: 'Entrée', department:'Direction Finacière' },
      { name: 'DF3', type: 'Sortie', department:'Direction Finacière' },
      { name: 'DF4', type: 'Entrée', department:'Direction Finacière' },
      { name: 'DF4', type: 'Sortie', department:'Direction Finacière' },
     

    ];
  }

  ngOnInit(): void {
  }

  openPorteAdd() {
    this.dialog.open(PorteAddComponent);
  }

}
