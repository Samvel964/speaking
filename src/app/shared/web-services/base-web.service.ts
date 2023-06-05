import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseWebService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any | null): Observable<T> {
    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: any | null): Observable<T> {
    return this.http.put<T>(url, body);
  }

  patch<T>(url: string, body: any | null): Observable<T> {
    return this.http.patch<T>(url, body)
  }

  delete<T>(url: string, options?: object): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
