import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../User";
import {Role} from "../role";

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

  public getUsers(centerId: number): Observable<User[]>{
    return this.httpclient.get<User[]>(this.Url+'/users?centerId='+centerId);
  }


  public getUsersForSup(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.Url + '/usersForSup');
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

  public updateUser(user: User): Observable<User>{
    return this.httpclient.put<User>(this.Url+"/updateUser", user);
  }

  public createUser(user : User): Observable<User>{
    return this.httpclient.post<User>(this.Url+"/addNewUser", user);
  }

  public deactivateUser(user: User): Observable<User>{
    return this.httpclient.put<User>(this.Url+"/deactivateUser", user);
  }

  public getRoles(): Observable<Role[]>{
    return this.httpclient.get<Role[]>(this.Url+'/roles');
  }
}
