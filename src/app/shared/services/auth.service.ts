import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ){}

  registration (username: string, password: string) {

  };

  login(data: {}) {
    const url = environment.authApiUrl + '/auth/login';

    return this.http.post(url,data);
  };
}
