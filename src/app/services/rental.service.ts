import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Rental } from '../rental';

const BASE_URL = 'https://mock-json-server-39aq.onrender.com/rentals';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private http: HttpClient) {}
  //get all rentals
  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(BASE_URL).pipe(
      catchError((error) => {
        console.error('Error getting rentals:', error);
        throw error;
      })
    );
  }

  //get rental by id
  getRentalById(id: number): Observable<Rental> {
    return this.http.get<Rental>(`${BASE_URL}/${id}`).pipe(
      catchError((error) => {
        console.error('Error getting rental by id:', error);
        throw error;
      })
    );
  }

  //create rental
  createRental(rental: Rental): Observable<Rental> {
    return this.http.post<Rental>(BASE_URL, rental).pipe(
      catchError((error) => {
        console.error('Error creating rental:', error);
        throw error;
      })
    );
  }

  //update rental
  updateRental(rental: Rental): Observable<Rental> {
    return this.http.put<Rental>(`${BASE_URL}/${rental.id}`, rental).pipe(
      catchError((error) => {
        console.error('Error updating rental:', error);
        throw error;
      })
    );
  }

  //delete rental
  deleteRental(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting rental:', error);
        throw error;
      })
    );
  }
}
