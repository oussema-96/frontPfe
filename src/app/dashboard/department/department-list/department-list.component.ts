import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/entities/department.service';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments: any;
  edit = false;
  departmentEditForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;

  constructor(public dialog:MatDialog, public departmentService: DepartmentService) {
    this.departmentEditForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('')
    });
  }
  
  async ngOnInit() {
    const getListDepartmentsResponse = await this.departmentService.getListdepartments()
    .then((resp:any) => {
      this.departments = resp;
    })
    .catch((err:any) => {
      console.log(err);
    })
  }

  deleteDepartment(id) {
    this.departmentService.deleteDepartment(id)
    .then(() => {this.ngOnInit()});
  }

  openEditPopup() {
    this.edit = true;
  }

  onEdit() {
    let department = {
      departmentName : this.departmentEditForm.get('name').value
    }
    this.departmentService.updatedepartment(this.departmentEditForm.get('id').value, department)
    .then(() => {
      this.ngOnInit();
    })
  }

  openPorteAdd() {
    this.dialog.open(DepartmentAddComponent);
  }

  close() {
    this.edit = false;
  }
}
