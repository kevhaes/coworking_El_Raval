import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ModalComponent } from './shared/modal/modal.component';
import { LoginComponent } from './shared/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AuthButtonComponent } from './shared/auth-button/auth-button.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { SecretpageComponent } from './pages/secretpage/secretpage.component';

import { environment } from './../environments/environment';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { DatePipe } from '@angular/common';
import { PersonalPinComponent } from './pages/personal-pin/personal-pin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    AuthButtonComponent,
    SecretpageComponent,
    BookingFormComponent,
    PersonalPinComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent],
})
export class AppModule { }
