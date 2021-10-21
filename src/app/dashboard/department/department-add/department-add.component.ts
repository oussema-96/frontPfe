import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { DepartmentService } from 'src/app/services/entities/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  error = null;
  valid = true;
  submitted = false;
  departmentAddForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required])
  });
  constructor(public dialogRef: MatDialogRef<DepartmentAddComponent>, private departmentService: DepartmentService) {
   }

  ngOnInit(): void {
    this.departmentAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
  }

  get f() { return this.departmentAddForm.controls; }

  onSubmit() {
    this.submitted = true;
    let department = {
      departmentName: this.departmentAddForm.get('departmentName').value
    }
    this.departmentService.saveDepartment(department)
    .then(() => {
      this.ngOnInit();
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
