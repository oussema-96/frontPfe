import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/authService';
import { FormStatusEnum } from 'src/app/models/common/enums/form-status.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = null;
  valid = true;
  submitted = false;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    public router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(8)])
    });
  }

  ngOnInit() {
    this.loginForm.statusChanges.subscribe((status) => {
      this.error = null;
      this.valid = status === FormStatusEnum.Valid;
    });
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('send form');
    let user = new User();
    if (this.loginForm.invalid) {
      return;
    } else {
      user.email = this.loginForm.value.email;
      user.password = this.loginForm.value.password;
    }
    this.authService.loginUser(user).then((response: any) => {
      localStorage.setItem('isLoggedin', 'true');
      this.cookieService.set('token', response.access_token, 1);

      this.router.navigate(['dashboard']);
    })
    .catch(err => {
      this.error = err;
    })
  }
}
