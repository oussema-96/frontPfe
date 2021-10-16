import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  departmentAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(public dialogRef: MatDialogRef<DepartmentAddComponent>) {
    this.departmentAddForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
    this.departmentAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
  }

  get f() { return this.departmentAddForm.controls; }

  onSubmit() {

  }

  close() {
    this.dialogRef.close();
  }

}
