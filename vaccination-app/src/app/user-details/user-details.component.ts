import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VaccinationCenter} from "../vaccination-center";
import {User} from "../User";
import {UserModalComponent} from "../user-modal/user-modal.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private matDialog: MatDialog, private user: UserService, public dialogRef: MatDialogRef<User[]>,@Inject(MAT_DIALOG_DATA) public data: User[]) { }

  ngOnInit(): void {
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

  displayedColumns: string[] = ['Nom','Prenom','Role']
  dataSource = this.data;

}
