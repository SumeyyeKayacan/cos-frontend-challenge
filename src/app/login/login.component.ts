import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginErrorComponent } from './login-error/login-error.component';

const ERROR_SNACKBAR_DURATION_IN_SECONDS = 10;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    const email = this.profileForm.get('email')?.value;
    const password = this.profileForm.get('password')?.value;

    try {
      await this.loginService.authenticate(email, password);
    } catch {
      this.snackBar.openFromComponent(LoginErrorComponent, {
        duration: ERROR_SNACKBAR_DURATION_IN_SECONDS * 1000,
      });
    }
  }
}
