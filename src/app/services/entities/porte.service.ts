import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DoorService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getDoors(id) {
    //     return this.http.get()
    // }

    public getDoor(id) {
        return this.http.get(this.baseUrl + 'Door/' + id).toPromise();
    }

    public saveDoor(deparmtent) {
        return this.http.post(this.baseUrl + 'Door', deparmtent).toPromise();
    }

    public updateDoor(id, deparmtent) {
        return this.http.put(this.baseUrl + 'Door?id=' + id, deparmtent).toPromise();
    }

    public getListDoors() {
        return this.http.get(this.baseUrl + 'Door').toPromise();
    }

    public deleteDoor(id) {
        return this.http.delete(this.baseUrl + 'Door/' + id).toPromise();
    }
}