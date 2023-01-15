import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public Url = environment.apiBaseUrl;

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData:any) {
    return this.httpclient.post(this.Url + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.Url + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.Url + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: Array<string>): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null) {
      for (let i = 0; i < userRoles.length; i++) {
        allowedRoles.forEach((e) => {
          if (userRoles[i].roleName === e) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        })
      }
    }
    return isMatch;
  }
}
