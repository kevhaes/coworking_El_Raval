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
import { AngularMaterialModule } from "./angular-material.module";
import { AuthButtonComponent } from './shared/auth-button/auth-button.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { SecretpageComponent } from './pages/secretpage/secretpage.component';

import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ModalComponent,
    LoginComponent,
    AuthButtonComponent,
    SecretpageComponent,
    //FormsModule
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
