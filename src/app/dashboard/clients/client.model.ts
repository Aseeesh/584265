import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Client { 
  public id: string;
    public firstName: string;
    public lastName: string;
    public dob: NgbDateStruct;
    public email: string;
    public password: string;
    public country: string;
    constructor() {
      this.id='';
      this.firstName = '';
      this.lastName = '';
      this.email = ''; 
      this.password = '';
      this.country = 'Select country';
      this.dob = null;
    }
}
