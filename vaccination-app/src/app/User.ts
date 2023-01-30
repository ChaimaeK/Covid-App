import {VaccinationCenter} from "./vaccination-center";
import {Role} from "./role";

/*export interface User{
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  center:VaccinationCenter;
  role: Role;
}*/

export class User{
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  center:VaccinationCenter;
  role: Role[];
  activated: boolean;

  constructor(userName: string, userFirstName: string, userLastName: string, userPassword: string, center: VaccinationCenter, role: Role[], activated: boolean) {
    this.userName = userName;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userPassword = userPassword;
    this.center = center;
    this.role = role;
    this.activated = activated;
  }
}
