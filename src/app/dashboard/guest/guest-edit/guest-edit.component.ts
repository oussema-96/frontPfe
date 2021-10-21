import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GuestService } from 'src/app/services/entities/guest.service';
import { PorteService } from 'src/app/services/entities/porte.service';
import { DepartmentService } from 'src/app/services/entities/department.service';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss']
})
export class GuestEditComponent implements OnInit {

  guest;
  departmentList;
  porteList;
  guestEditForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    public dialogRef: MatDialogRef<GuestEditComponent>,
    private guestService: GuestService,
    private porteService: PorteService,
    private departmentService: DepartmentService
  ) {
    this.guestEditForm = new FormGroup({
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
    this.guestEditForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
    this.getGuest();
    this.getListDepartments();
  }

  get f() { return this.guestEditForm.controls; }

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

  async getGuest() {
    await this.guestService.getGuest(this.data.id)
    .then((resp:any) => {
      this.guest = resp;
      this.guestEditForm.controls['firstName'].setValue(this.guest.firstName);
      this.guestEditForm.controls['lastName'].setValue(this.guest.lastName);
      this.guestEditForm.controls['cin'].setValue(this.guest.cin);
      this.guestEditForm.controls['email'].setValue(this.guest.email);
      this.guestEditForm.controls['cardNumber'].setValue(this.guest.cardNumber);
      this.guestEditForm.controls['mobilePhone'].setValue(this.guest.mobilePhone);
    })
  }

  onSubmit() {
    let doors = [parseInt(this.guestEditForm.get('doors').value)];
    let department = [parseInt(this.guestEditForm.get('department').value)];
    let guest = {
      guestId: this.data.id,
      firstName: this.guestEditForm.get('firstName').value,
      lastName: this.guestEditForm.get('lastName').value,
      gender: parseInt(this.guestEditForm.get('gender').value),
      cin: this.guestEditForm.get('cin').value,
      email: this.guestEditForm.get('email').value,
      department: department,
      doors: doors,
      cardNumber: this.guestEditForm.get('cardNumber').value,
      mobilePhone: this.guestEditForm.get('mobilePhone').value,
      birthday: this.guestEditForm.get('birthDate').value,
      activationDate: this.guestEditForm.get('activationDate').value,
      expiryDate: this.guestEditForm.get('expirationDate').value
    }
    this.guestService.updateGuest(this.data.id, guest)
    .then((resp:any) => {4
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }
}
