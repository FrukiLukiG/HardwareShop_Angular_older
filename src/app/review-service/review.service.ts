import { Injectable } from '@angular/core';
import { Review } from '../repository/review';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewUrl = "http://localhost:8080/review";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getReview(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl)
      .pipe(
        tap(h => console.log('fetched all reviews')),
        catchError(this.handleError<Review[]>('getReview', []))
      );
  }

  getReviewByHardwareCode(code: string): Observable<Review[]> {
    const url = `${this.reviewUrl}/${code}`;

    return this.http.get<Review[]>(url)
      .pipe(
        tap(h => console.log('fetched review by code')),
        catchError(this.handleError<Review[]>('getReviewByHardwareCode'))
      );
  }

  getReviewByString(str: string): Observable<Review[]> {
    const url = `${this.reviewUrl}?str=${str}`;

    return this.http.get<Review[]>(url)
    .pipe(
      tap(h => console.log('fetched review by string')),
      catchError(this.handleError<Review[]>('getReviewByString'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
