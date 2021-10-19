import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/entities/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

  department;
  departmentEditForm = new FormGroup({
    departmentName: new FormControl('', [Validators.required])
  });
  error = null;
  valid = true;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, public dialogRef: MatDialogRef<DepartmentEditComponent>, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentEditForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getDepartment();
  }

  get f() { return this.departmentEditForm.controls; }

  async getDepartment() {
   await this.departmentService.getDepartment(this.data.id)
   .then((resp:any) => {
     this.department = resp;
   });
  }

  onSubmit() {
    let department = {
      departmentName : this.departmentEditForm.get('name').value
    }
    this.departmentService.updateDepartment(this.departmentEditForm.get('id').value, department)
    .then(() => {
      this.ngOnInit();
    })
  }

  close() {
    this.dialogRef.close();
  }

}
