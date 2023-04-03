import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { DialogboxComponent } from './lazy/dialogbox/dialogbox.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'service', pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'service', component: ServiceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'sales', component:SalesComponent
  },
  {
    path: 'dialog', component:DialogboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
