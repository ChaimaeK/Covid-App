import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";

@Component({
  selector: 'app-center-creation',
  templateUrl: './center-creation.component.html',
  styleUrls: ['./center-creation.component.scss']
})
export class CenterCreationComponent implements OnInit {
  address = new FormControl();
  city = new FormControl();
  name = new FormControl();
  postal_code = new FormControl();

  constructor(public dialogRef: MatDialogRef<VaccinationCenter>,@Inject(MAT_DIALOG_DATA) public data: VaccinationCenter, private centerListService: CenterListService) { }

  ngOnInit(): void {
  }

  Submit(){
    //let center = new VaccinationCenter(this.data.idCenter, this.name.value,this.address.value, this.postal_code.value, this.city.value);
    this.centerListService.createCenter(this.name.value,this.address.value, this.postal_code.value, this.city.value).subscribe(()=> {
      this.dialogRef.close();
      window.location.reload();
    });
  }
}

