import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, flatMap} from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { nextTick } from 'q';

@Injectable()
export class AccountApiService {
    constructor(private http: HttpClient) { }

    accountApiUrl = 'https://healthmonitor-be.herokuapp.com/v1/account/';

    handleLogin() {
        this.http.get(this.accountApiUrl).subscribe(response => {}, error => {
            this.http.post(this.accountApiUrl, null).subscribe();
        });
    }
}
