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
        return this.http.get(this.baseUrl + 'Personnel/' + id).toPromise();
    }

    public savePersonne(deparmtent) {
        return this.http.post(this.baseUrl + 'Personnel', deparmtent).toPromise();
    }

    public updatePersonne(id, deparmtent) {
        return this.http.put(this.baseUrl + 'Personnel?id=' + id, deparmtent).toPromise();
    }

    public getListPersonnes() {
        return this.http.get(this.baseUrl + 'Personnel').toPromise();
    }

    public deletePersonne(id) {
        return this.http.delete(this.baseUrl + 'Personnel/' + id).toPromise();
    }
}