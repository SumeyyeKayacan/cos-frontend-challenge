import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-error',
  template: '<p>An error occurred: Incorrect username or password.<p>',
})
export class LoginErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
