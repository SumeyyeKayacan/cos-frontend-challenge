import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/services/login.service';
import { AuctionsService } from './auctions/services/auctions.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginErrorComponent } from './login/login-error/login-error.component';

import { AuctionsComponent } from './auctions/auctions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CountDownComponent } from './count-down/count-down.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserLocalStorageService } from './services/user-local-storage.service';
import { AuctionComponent } from './auctions/auction/auction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent,
    AuctionsComponent,
    PageNotFoundComponent,
    CountDownComponent,
    AuctionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [
    LoginService,
    AuctionsService,
    AuthGuardService,
    UserLocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
