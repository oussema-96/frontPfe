import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { DepartmentService } from 'src/app/services/entities/department.service';
import { GuestService } from 'src/app/services/entities/guest.service';
import { PorteService } from 'src/app/services/entities/porte.service';

@Component({
  selector: 'app-guest-add',
  templateUrl: './guest-add.component.html',
  styleUrls: ['./guest-add.component.scss']
})
export class GuestAddComponent implements OnInit {

  departmentList;
  porteList;
  guestAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor(
    private departmentService: DepartmentService,
    private porteService: PorteService,
    private guestService: GuestService,
    private router: Router
  ) {
    this.guestAddForm = new FormGroup({
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
    });
   }

  ngOnInit(): void {
    this.guestAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getListDepartments();
  }

  get f() { return this.guestAddForm.controls; }

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
    let doors = [parseInt(this.guestAddForm.get('doors').value)];
    let department = [parseInt(this.guestAddForm.get('department').value)];
    let guest = {
      firstName: this.guestAddForm.get('firstName').value,
      lastName: this.guestAddForm.get('lastName').value,
      gender: parseInt(this.guestAddForm.get('gender').value),
      cin: this.guestAddForm.get('cin').value,
      email: this.guestAddForm.get('email').value,
      department: department,
      doors: doors,
      cardNumber: this.guestAddForm.get('cardNumber').value,
      mobilePhone: this.guestAddForm.get('mobilePhone').value,
      birthday: this.guestAddForm.get("birthDate").value,
      activationDate: this.guestAddForm.get('activationDate').value,
      expiryDate: this.guestAddForm.get("expirationDate").value
    }
    this.guestService.saveGuest(guest)
    .then((resp:any) => {
      this.router.navigate(['/guest']);
    })
  }

}
