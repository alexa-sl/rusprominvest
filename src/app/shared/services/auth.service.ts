import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {IUser} from "../interfaces/IUser";
import {Observable} from "rxjs";
import {IRegisterRequest} from "../../auth/types/IRegisterRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ){}

  registration (data: IRegisterRequest): Observable<IUser> {
    const url = environment.authApiUrl + '/auth/registration';

    return this.http.post<IUser>(url, data, {
      withCredentials: true
    });
  };

  login(data: IRegisterRequest) {
    const url = environment.authApiUrl + '/auth/login';

    return this.http.post<IUser>(url, data, {
      withCredentials: true
    });
  };

  logout() {
    const url = environment.authApiUrl + '/auth/logout';

    return this.http.post(url, {}, {
      withCredentials: true
    });
  };

  refresh() {
    const url = environment.authApiUrl + '/auth/refresh';

    return this.http.post<IUser>(url, {}, {
      withCredentials: true
    });
  };

}
