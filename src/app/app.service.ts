import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  postdetails(url: string, userData: any): Observable<any>  {
    return this.http.post(url, userData);
  }

  getdetails(url: string) {
    return this.http.get(url)
      .map((response: Response) => {

        return response;

      }).catch((error: Response) => {

        return Observable.throw(error);
      });

  }

  updateDetails(url: string, body: any) {

    return this.http.put(url, body)
      .map((response: Response) => {
        return response;
      });
  }

  deleteDetails(url: string) {

    return this.http.delete(url)
      .map((response: Response) => {
        return response;
      });
  }

}
