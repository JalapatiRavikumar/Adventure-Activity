import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private activityService: ActivityService) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      activityId: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.activityService.bookActivity(this.bookingForm.value).subscribe(response => {
        console.log('Booking successful', response);
      });
    }
  }
}
