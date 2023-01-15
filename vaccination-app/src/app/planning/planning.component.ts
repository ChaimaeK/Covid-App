import { Component, OnInit } from '@angular/core';
import {CenterListService} from "../services/center-list.service";
import {Reservation} from "../reservation";
import {ReservationService} from "../services/reservation.service";
import {UserService} from "../services/user.service";
import {VaccinationCenter} from "../vaccination-center";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  reservations!: Reservation[];
  center!: VaccinationCenter;
  today = new Date();

  constructor(private reservation: ReservationService, private _center: CenterListService) {
  }

  ngOnInit(): void {
    this._center.getCenter(1).subscribe(data => {
      this.center = data;
    });

    this.reservation.getReservationsByCenter(1).subscribe(data => {
      this.reservations = data;
    });
  }

  onChercher(value: any) {
    this.reservation.getReservationsByCenterAndPatient(1,value).subscribe(data =>{
      this.reservations = data;
    });
  }

  onApproveVaccination(reservation: Reservation) {
    this.reservation.approveVaccination(reservation).subscribe(()=> this.ngOnInit());
  }
}
