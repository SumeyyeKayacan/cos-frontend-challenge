import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Auction, AuctionsService } from './services/auctions.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss'],
})
export class AuctionsComponent implements OnInit {
  constructor(private auctionsService: AuctionsService) {}

  error: string = '';
  auctions?: Auction[];

  ngOnInit() {
    this.auctionsService
      .getAuctions()
      .pipe(
        catchError((err: any) => {
          this.error = 'Auctions could not be retrieved!';
          return of([]);
        })
      )
      .subscribe((auctions: Auction[]) => {
        this.auctions = auctions;
      });
  }
}
