import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatHint, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BloodPressureComponent } from './blood-pressure/blood-pressure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AccountApiService } from './auth/account-api.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BloodPressureComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [AccountApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
