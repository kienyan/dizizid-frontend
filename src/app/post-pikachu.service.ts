import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pikachu } from './pikachu';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostpikachuService {
  private backendUrl = 'http://localhost:8080/pikachu';

  constructor(private http: HttpClient) { }

  addGeneric(generic: Pikachu): Observable<Pikachu> {
    return this.http.post<Pikachu>(this.backendUrl, generic, httpOptions).pipe(
      catchError(this.handleError<Pikachu>('addPikachu'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
