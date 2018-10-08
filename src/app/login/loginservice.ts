import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {
    private notify = new Subject<any>();
    notifyObservable$ = this.notify.asObservable();
    constructor(private http: HttpClient) { }

    postdetails(url: string, userData: any): Observable<any>  {

        return this.http.post(url, userData).map(response => {
            if (response) {
                this.notify.next(response);
            }
            return response;

        }).catch((error: Response) => {
            return Observable.throw(error);
        });
    }


    logout(): void {
        this.notify.next('Sign In');
    }
}
