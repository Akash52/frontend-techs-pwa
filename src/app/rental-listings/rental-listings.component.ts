import { Component, OnInit } from '@angular/core';
import { Rental } from '../rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental-listings',
  templateUrl: './rental-listings.component.html',
})
export class RentalListingsComponent implements OnInit {
  rentals!: Rental[];
  selectedRental!: Rental;
  isNewRental: boolean = false;
  modalOpen: boolean = false;
  isLoading: boolean = true;
  searchTerm = '';

  constructor(private apiService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
    this.selectedRental = {};
    this.isNewRental = true;
    this.modalOpen = false;
  }

  async getRentals() {
    this.apiService.getRentals().subscribe((rentals) => {
      this.rentals = rentals;
      this.isLoading = false;
    });
  }
  //selcte rental to edit
  selectRental(rental: Rental) {
    this.selectedRental = rental;
    this.isNewRental = false;
    this.openModal();
  }

  //save rental to db
  async saveRental(rentalData: Rental) {
    console.log(rentalData.address);
    let updatedRental: Rental;
    if (this.isNewRental) {
      // Add new rental
      this.apiService.createRental(rentalData).subscribe((rental: Rental) => {
        const newRental = rental;
        this.rentals.push(newRental);
      });
    } else {
      // Update existing rental
      this.apiService.updateRental(rentalData).subscribe((rental: Rental) => {
        updatedRental = rental;
        let index = this.rentals.findIndex((r) => r.id === rentalData.id);
        this.rentals[index] = updatedRental;
      });
    }
    this.selectedRental = {};
    this.isNewRental = true;
    this.closeModal();
  }

  //delete rental from db
  deleteRental(id: any) {
    if (!confirm('Are you sure want to delete this rental?')) {
      return;
    }
    this.apiService.deleteRental(id).subscribe(() => {
      this.rentals = this.rentals.filter((r) => r.id !== id);
    });
  }
  //create new rental
  createNewRental() {
    this.selectedRental = {};
    this.isNewRental = true;
    this.openModal();
  }
  //open modal
  openModal() {
    this.modalOpen = true;
  }
  //close modal
  closeModal() {
    this.modalOpen = false;
  }
}
