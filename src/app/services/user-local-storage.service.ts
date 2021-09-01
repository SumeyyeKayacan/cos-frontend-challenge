import { Injectable } from '@angular/core';

export interface User {
  token: string;
  userId: string;
}

@Injectable()
export class UserLocalStorageService {
  constructor() {}

  getUser(): User {
    const userStringified = localStorage.getItem('user');
    if (!userStringified) {
      throw new Error('User not logged in');
    }
    return JSON.parse(userStringified);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
