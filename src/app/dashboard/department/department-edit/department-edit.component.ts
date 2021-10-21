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
  departmentEditForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, public dialogRef: MatDialogRef<DepartmentEditComponent>, private departmentService: DepartmentService) { 
    this.departmentEditForm = new FormGroup({
      departmentName: new FormControl('', [Validators.required])
    });
  }
  
  async ngOnInit() {
    this.departmentEditForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    await this.getDepartment();
    this.departmentEditForm.controls['departmentName'].setValue(this.department.departmentName);
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
      departmentId: this.data.id,
      departmentName : this.departmentEditForm.get('departmentName').value
    }
    this.departmentService.updateDepartment(this.data.id, department)
    .then(() => {
      this.ngOnInit();
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }

}
