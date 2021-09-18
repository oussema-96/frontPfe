import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';7
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

    baseUrl = environment.api;
    token:string ="";
    public loggedUser:string="";
    public isloggedIn: Boolean = false;
    TOKEN_KEY = "AuthToken";
    USERNAME_KEY = 'AuthUsername';
    private username: string = "";

    constructor(private router: Router,
                private http: HttpClient) { }
  
    public loginUser(user: User) {
        return this.http.post<User>(this.baseUrl + "auth/signin", user).toPromise();
    }

    public signUp() {

    }

    public logOut() {
        
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
