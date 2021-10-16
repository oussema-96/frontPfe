import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoorService } from 'src/app/services/entities/porte.service';
import { PorteAddComponent } from '../porte-add/porte-add.component';

@Component({
  selector: 'app-porte-list',
  templateUrl: './porte-list.component.html',
  styleUrls: ['./porte-list.component.scss']
})
export class PorteListComponent implements OnInit {

  portes: any;

  constructor(public dialog: MatDialog, private doorService: DoorService) {
  }

  ngOnInit() {
    this.getPortes();
  }

  async getPortes() {
    await this.doorService.getListDoors()
    .then((resp:any) => {
      this.portes = resp;
      this.portes.forEach(element => {
        element.typeDoor = element.typeDoor === 0 ? 'entrée' : 'sortie'
      });
    })
  }

  openPorteAdd() {
    this.dialog.open(PorteAddComponent);
  }

  deleteDoor(id) {
    this.doorService.deleteDoor(id).then(() => this.ngOnInit());
  }

}
