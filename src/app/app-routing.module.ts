import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthButtonComponent } from './shared/auth-button/auth-button.component';
import { SecretpageComponent } from './pages/secretpage/secretpage.component';

// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'secret', component: SecretpageComponent,
    canActivate: [AuthGuard],
  // Protect a route by registering the auth guard in the `canActivate` hook /source: https://auth0.com/docs/libraries/auth0-angular-spa
  },
  { path: '**', component: HomepageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
