import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { ParkingBookingComponent } from './pages/parkingBooking/parking-booking/parking-booking.component';
import { BookingsOverviewComponent } from './pages/bookings-overview/bookings-overview.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path:'parking', component: ParkingBookingComponent},
    {path:'bookings', component: BookingsOverviewComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }