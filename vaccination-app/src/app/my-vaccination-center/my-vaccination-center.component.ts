import { Component, OnInit } from '@angular/core';
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";
import {UserAuthService} from "../services/user-auth.service";
import {User} from "../User";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../services/user.service";
import {UserModalComponent} from "../user-modal/user-modal.component";

@Component({
  selector: 'app-my-vaccination-center',
  templateUrl: './my-vaccination-center.component.html',
  styleUrls: ['./my-vaccination-center.component.scss']
})
export class MyVaccinationCenterComponent implements OnInit {

  center!: VaccinationCenter;
  useCenter!: string;
  users!: User[];

  constructor(private matDialog: MatDialog, private user: UserService, private _center: CenterListService, private userAuthService: UserAuthService) {
    this.useCenter = this.userAuthService.getCenterId();
  }

  ngOnInit(): void {
    this._center.getCenter(Number(this.useCenter)).subscribe(data => {
      this.center = data;
    });
    this.user.getUsers(Number(this.useCenter)).subscribe(data => {
      this.users = data;
    });
  }

  openCreateNewUserModal() {
    this.matDialog.open(UserModalComponent,{
      "width": '6000px',
      "maxHeight": '90vh',
      "autoFocus": false
    })
  }

  openUpdateUserModal(user: User) {
    this.matDialog.open(UserModalComponent,{
      "width": '6000px',
      "data": user,
      "maxHeight": '90vh',
      "autoFocus": false
    })
  }

  onDeactivate(user: User) {
    if(confirm("Etes vous sûr de désactiver ce profile")) {
      this.user.deactivateUser(user).subscribe(()=> {
        window.location.reload();
      });
    }
  }
}
