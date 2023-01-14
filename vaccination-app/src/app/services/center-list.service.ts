import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {VaccinationCenter} from "../vaccination-center";

@Injectable({
  providedIn: 'root'
})
export class CenterListService {

  public Url = environment.apiBaseUrl ;

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http : HttpClient) { }

  public getCenters(): Observable<VaccinationCenter[]>{
    return this.http.get<VaccinationCenter[]>(this.Url+"/public/centers", {
      headers: this.requestHeader,
    });
  }
}
