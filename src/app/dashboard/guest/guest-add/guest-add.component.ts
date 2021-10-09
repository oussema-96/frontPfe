import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';

@Component({
  selector: 'app-guest-add',
  templateUrl: './guest-add.component.html',
  styleUrls: ['./guest-add.component.scss']
})
export class GuestAddComponent implements OnInit {

  guestAddForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;
  constructor() {
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
      birthdate: new FormControl('', [Validators.required]),
      activationDate: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit(): void {
    this.guestAddForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
  }

  get f() { return this.guestAddForm.controls; }

  onSubmit() {

  }

}
