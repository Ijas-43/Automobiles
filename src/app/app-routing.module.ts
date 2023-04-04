import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './additional/login/login.component';
import { SignupComponent } from './additional/signup/signup.component';
const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'service', component: ServiceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },

  {
    path: 'sales', component:SalesComponent
  },

  { path: 'additional', loadChildren: () => import('./additional/additional.module').then(m => m.AdditionalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
