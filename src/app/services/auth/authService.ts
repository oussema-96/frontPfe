import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';7
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from 'src/app/Auth/login/login.component';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

    authenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
    baseUrl = environment.api;
    token:string ="";
    public loggedUser:string="";
    public isloggedIn: Boolean = false;
    TOKEN_KEY = "AuthToken";
    USERNAME_KEY = 'AuthUsername';
    status = false;

    constructor(private http: HttpClient, private cookieService: CookieService)
    { }
  
    handleAuthCookie() {
        let authToken = this.cookieService.get('token');
        if (authToken) {
            this.status = true ;
        } else {
            this.status = false;
        }
        this.authenticated = new BehaviorSubject(this.status);
    }

    public loginUser(user: User) {
        return this.http.post("https://localhost:44316/Users/authenticate", user).toPromise();
    }

    public logOut() {
        this.authenticated.next(false);
    }

    isLoggedIn(): boolean {
        return this.authenticated.value;
      }

    public getToke() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public saveToken(jwt:string) {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.setItem(this.TOKEN_KEY, jwt);
        this.isloggedIn = true;
        
    }

    public saveUsername(username: string) {
       localStorage.removeItem(this.USERNAME_KEY);
       localStorage.setItem(this.USERNAME_KEY, username);
    }

    public getUsername() {
        return localStorage.getItem(this.USERNAME_KEY);
    }


    public userLogOut() {
        this.isloggedIn = false;
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USERNAME_KEY);

    }


   
    

}
