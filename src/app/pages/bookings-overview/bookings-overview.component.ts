import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-bookings-overview',
  standalone: true,
  imports: [CardModule, CommonModule, ScrollPanelModule, ButtonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './bookings-overview.component.html',
  styleUrl: './bookings-overview.component.css',
  providers: [ConfirmationService, MessageService]
})
export class BookingsOverviewComponent {

  reservations=[
    {ParkingSpotNum:'1', Date:'01/05/2024', RegistrationTableNum:'NI-258-DS'},
    {ParkingSpotNum:'2', Date:'01/05/2024', RegistrationTableNum:'NI-252-JK'},
    {ParkingSpotNum:'3', Date:'01/05/2024', RegistrationTableNum:'NI-296-DR'},
    {ParkingSpotNum:'2', Date:'01/05/2024', RegistrationTableNum:'NI-252-JK'},
    {ParkingSpotNum:'3', Date:'01/05/2024', RegistrationTableNum:'NI-296-DR'}
  ]

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  cancelReservation(){
    console.log("DELETE");
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Da li ste sigurni da zelite da otkažete?',
        header: 'Potvrda otkazivanja',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Rezervacija otkazana' });
        }
    });
}

}
