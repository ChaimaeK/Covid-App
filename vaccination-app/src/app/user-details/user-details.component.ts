import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {VaccinationCenter} from "../vaccination-center";
import {User} from "../User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<User[]>,@Inject(MAT_DIALOG_DATA) public data: User[]) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Nom','Prenom','Role']
  dataSource = this.data;

}
