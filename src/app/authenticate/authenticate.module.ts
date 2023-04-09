import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';

@NgModule({
  declarations: [
    AuthenticateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
