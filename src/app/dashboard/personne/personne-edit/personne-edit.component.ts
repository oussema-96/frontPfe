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
  personneEditForm: FormGroup;
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
    this.personneEditForm = new FormGroup({
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
    this.personneEditForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getListDepartments();
    this.getPersonne();
  }

  get f() { return this.personneEditForm.controls; }

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
      console.log(this.personne);
      this.personneEditForm.controls['firstName'].setValue(this.personne.firstName);
      this.personneEditForm.controls['lastName'].setValue(this.personne.lastName);
      this.personneEditForm.controls['cin'].setValue(this.personne.cin);
      this.personneEditForm.controls['email'].setValue(this.personne.email);
      this.personneEditForm.controls['cardNumber'].setValue(this.personne.cardNumber);
      this.personneEditForm.controls['mobilePhone'].setValue(this.personne.mobilePhone);
      this.personneEditForm.controls['position'].setValue(this.personne.position);
    })
  }

  onSubmit() {
    let doors = [parseInt(this.personneEditForm.get('doors').value)];
    let department = [parseInt(this.personneEditForm.get('department').value)];
    let personne = {
      personnelId: this.data.id,
      firstName: this.personneEditForm.get('firstName').value,
      lastName: this.personneEditForm.get('lastName').value,
      gender: parseInt(this.personneEditForm.get('gender').value),
      cin: parseInt(this.personneEditForm.get('cin').value),
      email: this.personneEditForm.get('email').value,
      department: department,
      doors: doors,
      cardNumber: this.personneEditForm.get('cardNumber').value,
      mobilePhone: parseInt(this.personneEditForm.get('mobilePhone').value),
      birthday: this.personneEditForm.get('birthDate').value,
      activationDate: this.personneEditForm.get('activationDate').value,
      expiryDate: this.personneEditForm.get('expirationDate').value,
      position: parseInt(this.personneEditForm.get('position').value)
    }
    this.personneService.updatePersonne(this.data.id, personne)
    .then((resp:any) => {4
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }

}
