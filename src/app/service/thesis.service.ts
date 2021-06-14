import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Thesis } from '../interface/Thesis';

@Injectable({
  providedIn: 'root'
})
export class ThesisService {
  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

    // Create Thesis
    CreateThesis(data: string): Observable <Thesis[]> {
      let url = `${this.baseUri}/create`;
      return this.http.post <Thesis[]> (url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
    }

    // Get ALL Thesis
    getTheses(): Observable<Thesis[]> {
      return this.http.get <Thesis[]> (`${this.baseUri}`);
    }

    // Get Thesis
    getThesis(id: string): Observable<Thesis[]> {
      let url = `${this.baseUri}/read/${id}`;
      return this.http.get<Thesis[]>(url, {headers: this.headers}).pipe(
      
        catchError(this.errorMgmt)
      )
    }

    // Update Thesis
    updateThesis(id: string, data: string): Observable<Thesis[]> {
      let url = `${this.baseUri}/update/${id}`;
      return this.http.put<Thesis[]>(url, data, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }


    //Delete Thesis
    deleteThesis(id: string): Observable<Thesis[]> {
      let url = `${this.baseUri}/delete/${id}`;
      return this.http.delete<Thesis[]>(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

    // Error Handling
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }

}
