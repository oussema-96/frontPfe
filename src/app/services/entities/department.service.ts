import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getDoors(id) {
    //     return this.http.get()
    // }

    public getDepartment(id) {
        return this.http.get(this.baseUrl + 'Department/' + id).toPromise();
    }

    public saveDepartment(deparmtent) {
        return this.http.post(this.baseUrl + 'Department', deparmtent).toPromise();
    }

    public updateDepartment(id, deparmtent) {
        console.log(id);
        return this.http.put(this.baseUrl + 'Department?id=' + id, deparmtent).toPromise();
    }

    public getListDepartments() {
        return this.http.get(this.baseUrl + 'Department').toPromise();
    }

    public deleteDepartment(id) {
        return this.http.delete(this.baseUrl + 'Department/' + id).toPromise();
    }
}