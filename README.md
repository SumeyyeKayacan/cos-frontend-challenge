# CosFrontendChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Assumptions

### Sorting

Assumptions regarding auction sorting (since it is always observed in that way during implmentation):

- Backend always sends the auctions sorted according to ending time
- Backend always sends the autions first which current buyer is the highest bidder.

So, sorting is not prefered to be re-implementted on frontend

### Enumaration

Fueltype and transmision enumarations (-1, 0, 1,.) are matched to the their text names randomly.

### Authentication

AuthGuard is losely validating users (just checking user local storage token info exists or not).

Same error message is shown for wrong username/password entry and dealership login.
