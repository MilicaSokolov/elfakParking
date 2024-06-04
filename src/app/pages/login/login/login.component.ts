import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private messageService: MessageService
    //private toastModule: ToastModule 
  ) {
  }

  prijava(form: FormGroup) {
    if (form.valid) {
      console.log('Valid?', form.valid);
      console.log('Password', form.value.password);
      console.log('Email', form.value.email);
    } else {
      if (form.controls['email'].invalid) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Molimo, unesite Vaš elfak mail' });
      }
      if (form.controls['password'].invalid) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Molimo, unesite validnu lozinku' });
      }
    }
  }
}
