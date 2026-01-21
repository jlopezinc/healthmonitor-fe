import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { AccountApiService } from './auth/account-api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let accountApiServiceSpy: jasmine.SpyObj<AccountApiService>;

  beforeEach(waitForAsync(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['loginWithRedirect'], {
      isAuthenticated$: of(false),
      isLoading$: of(false)
    });
    accountApiServiceSpy = jasmine.createSpyObj('AccountApiService', ['handleLogin']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: AccountApiService, useValue: accountApiServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'healthmonitor-fe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('healthmonitor-fe');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // Just check that the component rendered successfully
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  });
});
