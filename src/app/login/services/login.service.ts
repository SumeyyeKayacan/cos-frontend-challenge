import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  token: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  async authenticate(email: string, password: string) {
    const url = `https://api-core-dev.caronsale.de/api/v1/authentication/${email}`;

    const body = { password: '123test', meta: 'string' };
    const response = (await this.http.put(url, body).toPromise()) as Response;

    console.log('response', response);
    const { token, userId } = response;

    const user = { token, userId };
    localStorage.setItem('user', JSON.stringify(user));
  }

  constructor(private http: HttpClient) {}
}
