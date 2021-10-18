import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/entities/department.service';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { DepartmentEditComponent } from '../department-edit/department-edit.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: any;
  error = null;
  valid = true;
  submitted = false;

  constructor(public dialog:MatDialog, public departmentService: DepartmentService) {
  }
  
  ngOnInit(): void {
  }
  
  deleteDepartment(id) {
    this.departmentService.deleteDepartment(id)
    .then(() => {this.ngOnInit()});
  }

  openPorteEdit(id) {
    this.dialog.open(DepartmentEditComponent, {
      data: { id: id },
    });
  }

  openPorteAdd() {
    this.dialog.open(DepartmentAddComponent);
  }
}
