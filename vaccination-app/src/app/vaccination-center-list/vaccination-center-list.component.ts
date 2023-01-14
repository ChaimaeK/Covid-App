import { Component, OnInit } from '@angular/core';
import {VaccinationCenter} from "../vaccination-center";
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {ReservationComponent} from "../reservation/reservation.component";
import {CenterListService} from "../services/center-list.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {

  //center_a: VaccinationCenter = {id:1,name:"CH Narbonne",address:"Boulevard Dr Lacroix",postalCode:11100,city:"Narbonne"};
  //center_b: VaccinationCenter = {id:2,name:"Nancy - Toul Marcel Brot",address:"1 rue Joseph Cugnot",postalCode:54000,city:"Nancy"}
  centers!: VaccinationCenter[]; //= [this.center_a, this.center_b];


  constructor(private matDialog: MatDialog, private center: CenterListService) { }

  ngOnInit(): void {
    this.center.getCenters().subscribe(data =>{
      this.centers = data;
    });
  }

  openReservation(center: VaccinationCenter) {
    this.matDialog.open(ReservationComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": center,
      "autoFocus": false
    });
  }

}
