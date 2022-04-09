import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewListingComponent } from './components/view-listing/view-listing.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'addListing', component: AddListingComponent},
      {path: 'viewListing', component: ViewListingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
