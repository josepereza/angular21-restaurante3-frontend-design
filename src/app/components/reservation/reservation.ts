import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css'
})
export class Reservation {
  reservation = signal({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    message: ''
  });

  submitted = signal(false);

  times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 5000);
    this.reservation.set({
      name: '', email: '', phone: '', date: '', time: '', guests: 2, message: ''
    });
  }
}
