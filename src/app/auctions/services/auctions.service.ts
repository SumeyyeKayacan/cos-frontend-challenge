import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, throwError } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constants';
import { UserLocalStorageService } from 'src/app/services/user-local-storage.service';

export interface VehicleImage {
  url: string;
  perspective: number;
}

export interface Vehicle {
  vehicleImages: VehicleImage[];
  ez: string;
  mileageInKm: number;
  fuelType: number;
  transmission: number;
}

export interface Auction {
  id: number;
  label: string;
  endingTime: string;
  associatedVehicle: Vehicle;
  amIHighestBidder: boolean;
  currentHighestBidValue: number;
}

interface AuctionsResponse {
  items: Auction[];
}

@Injectable({
  providedIn: 'root',
})
export class AuctionsService {
  constructor(
    private http: HttpClient,
    private userLocalStorageService: UserLocalStorageService
  ) {}

  getAuctions(): Observable<Auction[]> {
    const url = `${BASE_URL}/v2/auction/buyer/`;

    const { token: authToken, userId } = this.userLocalStorageService.getUser();

    const headers = {
      authToken,
      userid: userId,
    };

    return interval(5000).pipe(
      startWith(0),
      switchMap(
        () => this.http.get(url, { headers }) as Observable<AuctionsResponse>
      ),
      map((response) => response.items)
    );
  }
}
