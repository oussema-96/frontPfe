import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PorteService } from 'src/app/services/entities/porte.service';
import { DepartmentService } from 'src/app/services/entities/department.service';

@Component({
  selector: 'app-porte-edit',
  templateUrl: './porte-edit.component.html',
  styleUrls: ['./porte-edit.component.scss']
})
export class PorteEditComponent implements OnInit {

  departmentList;
  porte;
  porteEditForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    departmentId: new FormControl('', [Validators.required])
  });
  error = null;
  valid = true;
  submitted = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, public dialogRef: MatDialogRef<PorteEditComponent>, private porteService: PorteService, private departmentService: DepartmentService) { }
  
  ngOnInit(): void {
    this.porteEditForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getporte();
    this.getListDepartments();
  }
 
  
  get f() { return this.porteEditForm.controls; }
  
  async getListDepartments() {    
    await this.departmentService.getListDepartments()
    .then((resp:any) => {
      this.departmentList = resp;
    })
  }
  
  async getporte() {
   await this.porteService.getPorte(this.data.id)
   .then((resp:any) => {
     this.porte = resp;
   });
  }
  
  onSubmit() {
    let porte = {
      porteName : this.porteEditForm.get('name').value,
      porteType : this.porteEditForm.get('type').value,
      departmentId : this.porteEditForm.get('departmentId').value
    }
    this.porteService.updatePorte(this.porteEditForm.get('id').value, porte)
    .then(() => {
      this.ngOnInit();
    })
  }
  
  close() {
    this.dialogRef.close();
  }
}
