import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Reservation} from "../reservation";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {VaccinationCenter} from "../vaccination-center";

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

  public getReservationsByCenter(centerId: number): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.Url+'/reservations?centerId='+centerId);
  }

  public getReservationsByCenterAndPatient(centerId: number, name: any): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.Url+'/reservationsByPatient?centerId='+centerId+'&name='+name.keyword);
  }

  public approveVaccination(reservation: Reservation) {
    return this.http.put<Reservation>(this.Url+"/approveVaccination", reservation);
  }
}
