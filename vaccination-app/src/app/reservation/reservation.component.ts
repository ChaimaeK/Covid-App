import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VaccinationCenter} from "../vaccination-center";
import {FormControl} from "@angular/forms";
import {Reservation} from "../reservation";
import {ReservationService} from "../services/reservation.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  nom = new FormControl();
  prenom = new FormControl();
  email = new FormControl();
  date = new FormControl();


  constructor(public dialogRef: MatDialogRef<VaccinationCenter>,@Inject(MAT_DIALOG_DATA) public data: VaccinationCenter, private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  Submit() {
    let reservation = new Reservation(this.data, this.nom.value, this.prenom.value, this.email.value, this.date.value);
    //this.reservationService.addReservation(reservation).subscribe(()=> this.dialogRef.close());
    this.reservationService.addReservation(reservation).subscribe(()=> this.dialogRef.close());
  }
}
