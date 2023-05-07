import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rental } from '../rental';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css'],
})
export class RentalFormComponent {
  @Input() rental!: Rental;
  @Input() isNew = true;
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  submitForm(form: NgForm) {
    if (form.valid) {
      const rental = this.rental;
      this.submit.emit(rental);
      setTimeout(() => {
        form.resetForm();
        this.onCancel();
      }, 2000);
    }
  }
  onCancel() {
    this.cancel.emit();
  }
}
