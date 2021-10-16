import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class HistoryService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    // public getHistorys(id) {
    //     return this.http.get()
    // }

    public getHistory(id) {
        return this.http.get(this.baseUrl + 'History/' + id).toPromise();
    }

    public saveHistory(deparmtent) {
        return this.http.post(this.baseUrl + 'History', deparmtent).toPromise();
    }

    public updateHistory(id, deparmtent) {
        return this.http.put(this.baseUrl + 'History?id=' + id, deparmtent).toPromise();
    }

    public getListHistory() {
        return this.http.get(this.baseUrl + 'History').toPromise();
    }

    public deleteHistory(id) {
        return this.http.delete(this.baseUrl + 'History/' + id).toPromise();
    }
}