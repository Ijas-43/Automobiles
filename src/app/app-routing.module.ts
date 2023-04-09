import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ServiceComponent } from './service/service.component';
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
    path: 'service', component: ServiceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },

  {
    path: 'sales', component:SalesComponent
  },

  { path: 'authenticate', loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule) },

  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
