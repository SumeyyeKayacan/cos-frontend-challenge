import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-error',
  template:
    '<p>An error occurred: Please make sure that you have typed your username or password correct or you have access rights to this application.<p>',
})
export class LoginErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
