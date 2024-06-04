import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { ParkingBookingComponent } from './pages/parkingBooking/parking-booking/parking-booking.component';
import { BookingsOverviewComponent } from './pages/bookings-overview/bookings-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ParkingBookingComponent, BookingsOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eParking';

}
