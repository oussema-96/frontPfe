import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonneService } from 'src/app/services/entities/personne.service';
import { PorteService } from 'src/app/services/entities/porte.service';
import { DepartmentService } from 'src/app/services/entities/department.service';

@Component({
  selector: 'app-personne-edit',
  templateUrl: './personne-edit.component.html',
  styleUrls: ['./personne-edit.component.scss']
})
export class PersonneEditComponent implements OnInit {

  personne;
  porteList;
  departmentList;
  personneAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    public dialogRef: MatDialogRef<PersonneEditComponent>,
    private personneService: PersonneService,
    private porteService: PorteService,
    private departmentService: DepartmentService
  ) {
    this.personneAddForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      department: new FormControl('', [Validators.required]),
      doors: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      mobilePhone: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      activationDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
    this.personneAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getListDepartments();
  }

  get f() { return this.personneAddForm.controls; }

  async getListDepartments() {    
    await this.departmentService.getListDepartments()
    .then((resp:any) => {
      this.departmentList = resp;
    })
  }
  
  async getListPortes(id) {
   await this.porteService.getListPortes()
   .then((resp:any) => {
     this.porteList = resp;
   });
  }

  async getPersonne() {
    await this.personneService.getPersonne(this.data.id)
    .then((resp:any) => {
      this.personne = resp;
    })
  }

  onSubmit() {

  }


}
