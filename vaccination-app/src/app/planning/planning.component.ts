import { Component, OnInit } from '@angular/core';
import {CenterListService} from "../services/center-list.service";
import {Reservation} from "../reservation";
import {ReservationService} from "../services/reservation.service";
import {UserService} from "../services/user.service";
import {VaccinationCenter} from "../vaccination-center";
import {DatePipe, formatDate} from "@angular/common";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  reservations!: Reservation[];
  center!: VaccinationCenter ;
  useCenter!: string;

  constructor(private reservation: ReservationService, private _center: CenterListService, private userAuthService: UserAuthService) {
    this.useCenter = this.userAuthService.getCenterId();
  }

  ngOnInit(): void {
    this._center.getCenter(Number(this.useCenter)).subscribe(data => {
      this.center = data;
    });
    this.reservation.getReservationsByCenter(Number(this.useCenter)).subscribe(data => {
      this.reservations = data;
    });
  }

  onChercher(value: any) {
    this.reservation.getReservationsByCenterAndPatient(Number(this.useCenter),value).subscribe(data =>{
      this.reservations = data;
    });
  }

  onApproveVaccination(reservation: Reservation) {
    this.reservation.approveVaccination(reservation).subscribe(()=> this.ngOnInit());
  }
}
