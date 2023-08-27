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

  registration (data:{username: string, password: string}) {
    const url = environment.authApiUrl + '/auth/registration';

    return this.http.post(url,data);
  };

  login(data: {}) {
    const url = environment.authApiUrl + '/auth/login';

    return this.http.post(url,data);
  };

}
