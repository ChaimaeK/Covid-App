import {FormControl} from "@angular/forms";
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {User} from "../User";
import {UserService} from "../services/user.service";
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";
import {Role} from "../role";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  userName = new FormControl(this.data?.userName);
  userFirstName = new FormControl(this.data?.userFirstName);
  userLastName = new FormControl(this.data?.userLastName);
  userPassword = new FormControl(this.data?.userPassword);
  center = new FormControl(this.data?.center);
  role = new FormControl(this.data?.role);
  activated = this.data?.activated || true;

  centers!: VaccinationCenter[];
  roles!: Role[];
  rolesForm: Role[] = [];

    constructor(public dialogRef: MatDialogRef<User>, @Inject(MAT_DIALOG_DATA) public data: User, public userService: UserService, private _center: CenterListService) {
    }

  ngOnInit(): void {
    this._center.getCenters().subscribe(data =>{
      this.centers = data;
    });
    this.userService.getRoles().subscribe(data =>{
      if (this.userService.roleMatch(['Admin'])) {
        this.roles = data.filter(d => d.roleName === 'Medecin');
      } else {
        this.roles = data;
      }
    });
  }

  Submit(){
    this.rolesForm.push(this.role.value);
    let roleForm = this.data ? this.role.value : this.rolesForm;
    let user = new User(this.userName.value, this.userFirstName.value, this.userLastName.value, this.userPassword.value, this.center.value, roleForm, this.activated);
    console.log(user);
    if (this.data) {
      this.userService.updateUser(user).subscribe(()=> {
        this.dialogRef.close();
        window.location.reload();
      });
    } else {
      this.userService.createUser(user).subscribe(()=> {
        this.dialogRef.close();
        window.location.reload();
      });
    }
  }

  close(){
    this.dialogRef.close();
  }

  onDeactivate() {
    let user = new User(this.userName.value, this.userFirstName.value, this.userLastName.value, this.userPassword.value, this.center.value, this.role.value, this.activated);
    if(confirm("Etes vous sûr de désactiver ce profile")) {
      this.userService.deactivateUser(user).subscribe(()=> {
        this.dialogRef.close();
        window.location.reload();
      });
    }
  }
}
