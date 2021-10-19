import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { DepartmentService } from 'src/app/services/entities/department.service';
import { PorteService } from 'src/app/services/entities/porte.service';



@Component({
  selector: 'app-porte-add',
  templateUrl: './porte-add.component.html',
  styleUrls: ['./porte-add.component.scss']
})
export class PorteAddComponent implements OnInit {

  departmentList;
  porteAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(
    public dialogRef: MatDialogRef<PorteAddComponent>,
    private departmentService: DepartmentService,
    private porteService: PorteService
  ) {
    this.porteAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      departmentId: new FormControl ('', [Validators.required])
    });
   }

  ngOnInit() {
    this.porteAddForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getListDepartments();
  }
  
  get f() { return this.porteAddForm.controls; }
  
  async getListDepartments() {    
    await this.departmentService.getListDepartments()
    .then((resp:any) => {
      this.departmentList = resp;
    })
  }

  onSubmit() {
    let porte = {
      doorName: this.porteAddForm.value.name,
      typeDoor: this.porteAddForm.get('type').value,
      departmentId: this.porteAddForm.get('departmentId').value
    }
    this.porteService.savePorte(porte)
    .then(() => {
      this.ngOnInit();
    })
  }

  close() {
    this.dialogRef.close();
  }

}
