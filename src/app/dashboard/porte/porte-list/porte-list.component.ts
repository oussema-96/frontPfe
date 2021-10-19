import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PorteService } from 'src/app/services/entities/porte.service';
import { PorteAddComponent } from '../porte-add/porte-add.component';
import { PorteEditComponent } from '../porte-edit/porte-edit.component';

@Component({
  selector: 'app-porte-list',
  templateUrl: './porte-list.component.html',
  styleUrls: ['./porte-list.component.scss']
})
export class PorteListComponent implements OnInit {

  portes: any;

  constructor(public dialog: MatDialog, private porteService: PorteService) {
  }

  ngOnInit() {
    this.getPortes();
    this.portes = [{doorName: 'test'}];
  }

  async getPortes() {
    await this.porteService.getListPortes()
    .then((resp:any) => {
      this.portes = resp;
      this.portes.forEach(element => {
        element.typeDoor = element.typeDoor === 0 ? 'entrée' : 'sortie'
      });
    })
  }

  openPorteEdit(id) {
    this.dialog.open(PorteEditComponent, {
      data: { id: id },
    });
  }

  openPorteAdd() {
    this.dialog.open(PorteAddComponent);
  }

  deleteDoor(id) {
    this.porteService.deletePorte(id).then(() => this.ngOnInit());
  }

}
