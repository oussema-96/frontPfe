import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PersonneService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getDoors(id) {
    //     return this.http.get()
    // }

    public getPersonne(id) {
        return this.http.get(this.baseUrl + 'Personne/' + id).toPromise();
    }

    public savePersonne(deparmtent) {
        return this.http.post(this.baseUrl + 'Personne', deparmtent).toPromise();
    }

    public updatePersonne(id, deparmtent) {
        return this.http.put(this.baseUrl + 'Personne?id=' + id, deparmtent).toPromise();
    }

    public getListPersonnes() {
        return this.http.get(this.baseUrl + 'Personne').toPromise();
    }

    public deletePersonne(id) {
        return this.http.delete(this.baseUrl + 'Personne/' + id).toPromise();
    }
}