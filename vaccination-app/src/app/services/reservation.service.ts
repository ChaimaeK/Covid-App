import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../reservation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public Url = environment.apiBaseUrl ;

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient) { }

  public addReservation(reservation: Reservation) {
    return this.http.post<Reservation>(this.Url+"/public/addReservation", reservation, {
      headers: this.requestHeader,
    });
  }
}
