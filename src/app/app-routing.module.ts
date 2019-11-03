import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }
  ]
})
export class AppRoutingModule { }
