import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { DepartmentService } from 'src/app/services/entities/department.service';
import { PersonneService } from 'src/app/services/entities/personne.service';
import { PorteService } from 'src/app/services/entities/porte.service';

@Component({
  selector: 'app-personne-add',
  templateUrl: './personne-add.component.html',
  styleUrls: ['./personne-add.component.scss']
})
export class PersonneAddComponent implements OnInit {

  departmentList;
  porteList;
  personneAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(private departmentService: DepartmentService, private porteService: PorteService, private router: Router, private personneService: PersonneService) {
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

  onSubmit() {
    let doors = [parseInt(this.personneAddForm.get('doors').value)];
    let department = [parseInt(this.personneAddForm.get('department').value)];
    let personne = {
      firstName: this.personneAddForm.get('firstName').value,
      lastName: this.personneAddForm.get('lastName').value,
      gender: parseInt(this.personneAddForm.get('gender').value),
      cin: this.personneAddForm.get('cin').value,
      email: this.personneAddForm.get('email').value,
      department: department,
      doors: doors,
      cardNumber: this.personneAddForm.get('cardNumber').value,
      mobilePhone: this.personneAddForm.get('mobilePhone').value,
      birthday: this.personneAddForm.get("birthDate").value,
      activationDate: this.personneAddForm.get('activationDate').value,
      expiryDate: this.personneAddForm.get("expirationDate").value,
      position: parseInt(this.personneAddForm.get('position').value)
    }
    this.personneService.savePersonne(personne)
    .then(() => {
      this.router.navigate(['/personne']);
    })
  }

}
