import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [],
  standalone: false
})
export class LogoutButtonComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  logout(): void {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.doc.location.origin 
      }
    });
  }
}
