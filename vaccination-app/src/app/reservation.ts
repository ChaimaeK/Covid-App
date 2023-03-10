import {VaccinationCenter} from "./vaccination-center";

export class Reservation {
  idReservation!: number;
  reservationDate: Date;
  center: VaccinationCenter;
  nom: string;
  prenom: string;
  email: string;
  approved: boolean;


  constructor(center: VaccinationCenter, nom:string, prenom: string, email: string, reservationDate: Date, approved: boolean) {
    this.center = center;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.reservationDate = reservationDate;
    this.approved = approved;
  }
}
