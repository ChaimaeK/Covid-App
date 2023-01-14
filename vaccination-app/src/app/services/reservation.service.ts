import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../reservation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public Url = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  public addReservation(reservation: Reservation) {
    return this.http.post<Reservation>(this.Url+"/addReservation", reservation);
  }
}
