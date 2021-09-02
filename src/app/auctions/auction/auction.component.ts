import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../services/auctions.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  @Input() auction?: Auction;

  constructor() {}

  ngOnInit(): void {}
}
