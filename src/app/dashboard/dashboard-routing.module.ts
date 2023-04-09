import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppoinmentsComponent } from './appoinments/appoinments/appoinments.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'appoinment', component: AppoinmentsComponent},
{path: 'profile', component: ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
