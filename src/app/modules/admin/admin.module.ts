import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewListingComponent } from './components/view-listing/view-listing.component';


@NgModule({
  declarations: [
    AddListingComponent,
    AdminDashboardComponent,
    HeaderComponent,
    ViewListingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AdminModule { }
