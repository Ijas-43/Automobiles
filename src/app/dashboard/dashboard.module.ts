import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header/header.component';
import { AppoinmentsComponent } from './appoinments/appoinments/appoinments.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import{MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AppoinmentsComponent,
    ProfileComponent,
    SidenavComponent  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatIconModule
  ]
})
export class DashboardModule { }
