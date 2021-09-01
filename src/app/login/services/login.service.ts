import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants';
import { UserLocalStorageService } from 'src/app/services/user-local-storage.service';

interface Response {
  token: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private userLocalStorageService: UserLocalStorageService
  ) {}

  async authenticate(email: string, password: string) {
    const url = `${BASE_URL}/v1/authentication/${email}`;

    const body = { password: '123test', meta: 'string' };
    const response = (await this.http.put(url, body).toPromise()) as Response;

    const { token, userId } = response;

    this.userLocalStorageService.saveUser({ token, userId });
  }
}
