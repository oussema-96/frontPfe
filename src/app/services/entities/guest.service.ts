import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GuestService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getGuests(id) {
    //     return this.http.get()
    // }

    public getGuest(id) {
        return this.http.get(this.baseUrl + 'Guest/' + id).toPromise();
    }

    public saveGuest(deparmtent) {
        return this.http.post(this.baseUrl + 'Guest', deparmtent).toPromise();
    }

    public updateGuest(id, deparmtent) {
        return this.http.put(this.baseUrl + 'Guest?id=' + id, deparmtent).toPromise();
    }

    public getListGuests() {
        return this.http.get(this.baseUrl + 'Guest').toPromise();
    }

    public deleteGuest(id) {
        return this.http.delete(this.baseUrl + 'Guest/' + id).toPromise();
    }
}