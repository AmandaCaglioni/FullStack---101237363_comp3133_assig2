import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListingComponent } from 'src/app/search-listing/search-listing.component';
import { BookListingComponent } from './components/book-listing/book-listing.component';
import { BookingComponent } from './components/booking/booking.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';

const routes: Routes = [
  {
    path: '', component: CustomerDashboardComponent,
    children: [
      {path: 'addBooking', component: BookingComponent},
      {path: 'bookListing', component: BookListingComponent},
      {path: 'viewBooking', component: ViewBookingComponent},
      {path: 'search', component: SearchListingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
