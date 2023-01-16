import { Component, OnInit } from '@angular/core';
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-my-vaccination-center',
  templateUrl: './my-vaccination-center.component.html',
  styleUrls: ['./my-vaccination-center.component.scss']
})
export class MyVaccinationCenterComponent implements OnInit {

  center!: VaccinationCenter;
  useCenter!: string;
  constructor(private _center: CenterListService, private userAuthService: UserAuthService) {
    this.useCenter = this.userAuthService.getCenterId();
  }

  ngOnInit(): void {
    this._center.getCenter(Number(this.useCenter)).subscribe(data => {
      this.center = data;
    });
  }

}
