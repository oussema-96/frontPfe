import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PorteService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getDoors(id) {
    //     return this.http.get()
    // }

    public getPorte(id) {
        return this.http.get(this.baseUrl + 'Door/' + id).toPromise();
    }

    public savePorte(deparmtent) {
        return this.http.post(this.baseUrl + 'Door', deparmtent).toPromise();
    }

    public updatePorte(id, deparmtent) {
        return this.http.put(this.baseUrl + 'Door?id=' + id, deparmtent).toPromise();
    }

    public getListPortes() {
        return this.http.get(this.baseUrl + 'Door').toPromise();
    }

    public deletePorte(id) {
        return this.http.delete(this.baseUrl + 'Door/' + id).toPromise();
    }
}