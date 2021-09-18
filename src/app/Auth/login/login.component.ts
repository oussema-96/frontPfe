import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    });
   }

  ngOnInit(): void {
  }

  public getFormField(field: string) {
    return this.loginForm.get(field.toString());
  }

  public onSubmit() {
    const user = new User(this.getFormField('email')?.value, this.getFormField('password')?.value);
    console.log(user);
    this.authService.loginUser(user);
    console.log('sobmited');
  }
}
