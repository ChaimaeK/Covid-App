import {VaccinationCenter} from "./vaccination-center";

export interface User{
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  center:VaccinationCenter;
  role: any;
}
