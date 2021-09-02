import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants';
import { UserLocalStorageService } from 'src/app/services/user-local-storage.service';

const SALESMAN_PREVLIGE = 'SALESMAN_USER';

interface Response {
  token: string;
  userId: string;
  privileges: string;
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

    const body = { password, meta: 'string' };
    const response = (await this.http.put(url, body).toPromise()) as Response;

    if (!response.privileges.includes(SALESMAN_PREVLIGE)) {
      throw new Error();
    }

    const { token, userId } = response;
    this.userLocalStorageService.saveUser({ token, userId });
  }
}
