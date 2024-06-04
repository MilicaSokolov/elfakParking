import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-parking-booking',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule,CommonModule, DropdownModule, SelectButtonModule],
  templateUrl: './parking-booking.component.html',
  styleUrl: './parking-booking.component.css',
  providers: [MessageService]
})
export class ParkingBookingComponent implements OnInit {

  parkingOptions = [
    { label: 'Prednji parking', value: 'P1' },
    { label: 'Zadnji parking', value: 'P2' }
  ];

  selectedParking: string = 'Prednji parking';
  parkingInfoForm: FormGroup;

  ngOnInit() {

  }
  constructor(
    private messageService: MessageService,
    private dropdownModule: DropdownModule
  ) {

    this.parkingInfoForm = new FormGroup({
      parkingNum: new FormControl('P1', [Validators.required]),
      parkingSpotNum: new FormControl('', Validators.required),
      registrationTableNum: new FormControl('', Validators.required),
      bookingDate: new FormControl('', Validators.required)
    });

  }

  book(form: FormGroup) {
    if (form.valid) {
      console.log('Valid?', form.valid);
    } else {
      if (form.controls['registrationTableNum'].invalid) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Molimo, unesite broj registarske tablice' });
      }
      if (form.controls['bookingDate'].invalid) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Molimo, unesite datum rezervacije' });
      }
    }
  }
}
