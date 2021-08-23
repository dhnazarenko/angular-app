import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: ' Daniel Nazarenko',
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
      {
        id: 2,
        name: ' Kevin Perk',
        roomNumber: 57,
        startDate: new Date(),
        endDate: new Date('2021-08-11'),
      },
      {
        id: 3,
        name: ' Peter Lustig',
        roomNumber: 133,
        startDate: new Date(),
        endDate: new Date('2021-08-25'),
      },
      {
        id: 4,
        name: ' Max Muster',
        roomNumber: 87,
        startDate: new Date(),
        endDate: new Date('2021-10-15'),
      },
      {
        id: 5,
        name: ' Gustav Gans',
        roomNumber: 187,
        startDate: new Date(),
        endDate: new Date('2021-12-12'),
      },
    ];
    return bookings;
  }

  constructor() {}
}
