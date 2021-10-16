import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';



@Component({
  selector: 'app-porte-add',
  templateUrl: './porte-add.component.html',
  styleUrls: ['./porte-add.component.scss']
})
export class PorteAddComponent implements OnInit {

  porteAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(
    public dialogRef: MatDialogRef<PorteAddComponent>
  ) {
    this.porteAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      deparmentId: new FormControl ('', [Validators.required])
    });
   }

  ngOnInit(): void {
    this.porteAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
  }

  get f() { return this.porteAddForm.controls; }

  onSubmit() {

  }

  close() {
    this.dialogRef.close();
  }

}
