import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { BookingComponent } from './components/booking/booking.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { BookListingComponent } from './components/book-listing/book-listing.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ViewBookingComponent,
    BookingComponent,
    HeaderComponent,
    SearchComponent,
    BookListingComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class CustomerModule { }
