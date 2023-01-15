import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {UserService} from "../services/user.service";
import {User} from "../User";

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.scss']
})
export class CenterDetailsComponent implements OnInit {
  address = new FormControl(this.data.address);
  city = new FormControl(this.data.city);
  name = new FormControl(this.data.name);
  postal_code = new FormControl(this.data.postalCode);
  users!: User[];

  constructor(public dialogRef: MatDialogRef<VaccinationCenter>,@Inject(MAT_DIALOG_DATA) public data: VaccinationCenter, private centerListService: CenterListService, private matDialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersForSup(this.data.idCenter).subscribe((users)=>{
      this.users = users;
      console.log(this.users);
    });
  }

  Submit(){
    let center = new VaccinationCenter(this.data.idCenter, this.name.value,this.address.value, this.postal_code.value, this.city.value);
    this.centerListService.updateCenter(center).subscribe(()=> {
      this.dialogRef.close();
      window.location.reload();
    });
  }

  close(){
    this.dialogRef.close();
  }

  openUsers() {
    this.matDialog.open(UserDetailsComponent,{
      "width": '6000px',
      "maxHeight": '90vh',
      "data": this.users,
      "autoFocus": false
    });
  }
}
