import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from './../../environments/environment';

@Injectable()
export class AccountApiService {

    constructor(public auth: AuthService, private http: HttpClient) {
    }

    accountApiUrl = env.serverUrl + '/v1/account/';

    handleLogin() {
        this.http.get(this.accountApiUrl).subscribe({
            next: () => {},
            error: () => {
                this.http.post(this.accountApiUrl, null).subscribe();
            }
        });
    }
}
