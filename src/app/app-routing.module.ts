import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SearchListingComponent } from './search-listing/search-listing.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'search', component: SearchListingComponent},
  {path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  {path: 'customer', canActivate: [AuthGuard], loadChildren: () => import('./modules/customer/customer.module').then((m) => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
