export class VaccinationCenter{
  idCenter: number;
  name: string;
  address: string;
  postalCode: number;
  city: string;


  constructor(id: number, name: string, address: string, postalCode: number, city: string){
    this.idCenter = id;
    this.name = name;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
  }


}
