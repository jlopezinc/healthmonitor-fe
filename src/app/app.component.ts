import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AccountApiService } from './auth/account-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService, private accountApiService: AccountApiService) {}

  title = 'healthmonitor-fe';

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((value) => {
        if (value === true){
            this.accountApiService.handleLogin();
          }
        }
      );
  }
}
