import { Component, OnInit } from '@angular/core';

import {User} from "../User";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../services/user.service";
import {CenterListService} from "../services/center-list.service";
import {UserAuthService} from "../services/user-auth.service";
import {UserModalComponent} from "../user-modal/user-modal.component";

@Component({
  selector: 'app-super-admin-config',
  templateUrl: './super-admin-config.component.html',
  styleUrls: ['./super-admin-config.component.scss']
})
export class SuperAdminConfigComponent implements OnInit {

  useCenter!: string;
  users!: User[];
  private true: any;

  constructor(private matDialog: MatDialog, private user: UserService, private _center: CenterListService, private userAuthService: UserAuthService) {
    this.useCenter = this.userAuthService.getCenterId();
  }

  ngOnInit(): void {
    this.user.getUsersForSup().subscribe(data => {
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

