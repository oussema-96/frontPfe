import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BlackListService {
    baseUrl = environment.api;

    constructor(private http: HttpClient) {

    }

    public getList(id) {
        return this.http.get(this.baseUrl + 'BlackLists').toPromise();
    }

    public deleteElement(id) {
        return this.http.delete(this.baseUrl + 'BlackLists/' + id).toPromise();
    }
}