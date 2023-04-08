// core/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  private baseUrl: string = this.configService.getAPIUrl();


  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return throwError(() => error.json());
    }

  get(path: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}${path}`, { headers: this.setHeaders() })
      .pipe(catchError(this.formatErrors));
    }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.baseUrl}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.baseUrl}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}${path}`, { headers: this.setHeaders() })
      .pipe(catchError(this.formatErrors));
  }
}
