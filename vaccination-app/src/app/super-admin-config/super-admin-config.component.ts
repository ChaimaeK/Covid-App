import { Component, OnInit } from '@angular/core';
import {VaccinationCenter} from "../vaccination-center";
import {CenterListService} from "../services/center-list.service";
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-super-admin-config',
  templateUrl: './super-admin-config.component.html',
  styleUrls: ['./super-admin-config.component.scss']
})
export class SuperAdminConfigComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
