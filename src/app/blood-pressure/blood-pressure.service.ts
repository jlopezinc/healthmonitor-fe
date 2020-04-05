import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class BloodPressure {
    systolic: number;
    diastolic: number;
    heartrate: number;
    createdOn: Date;
}

@Injectable()
export class BloodPressureService {
  constructor(private http: HttpClient) { }

  bloodPressureApiUrl = 'https://healthmonitor-be.herokuapp.com/v1/bloodpressure/';

  getBloodPressure(page: number, pageSize: number) {
    return this.http.get<BloodPressure[]>(this.bloodPressureApiUrl,
      {params: new HttpParams()
      .set('page', page + '')
      .set('pageSize', pageSize + '')
      })
      .pipe(catchError(this.handleError));
  }

  getBloodPressureCount() {
    return this.http.get<number>(this.bloodPressureApiUrl + 'count')
      .pipe(catchError(this.handleError));
  }

  saveBloodPressure(bloodpressure: BloodPressure) {
    return this.http.post(this.bloodPressureApiUrl, bloodpressure)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

