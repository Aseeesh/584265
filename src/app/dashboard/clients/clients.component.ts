import { ClientService } from './clients.service';
import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
  
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
}) 
export class ClientsComponent implements OnInit {
  // It maintains list of clients
  clients: Client[] = [];
  // It maintains client Model
  regModel: Client;
  // It maintains client form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  countries: string[] = ['US', 'UK', 'India', 'UAE'];
  constructor(public clientService: ClientService) {
    }

  ngOnInit() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Client;
      })
    });
  }
  create(client: Client){
    this.clientService.createClient(client);
    }

    update(client: Client) {
      this.clientService.updateClient(client);
    }

    delete(id: string) {
      this.clientService.deleteClient(id);
    }
  // This method associate to New Button.
  onNew() {
    // Initiate new client.
    this.regModel = new Client();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display client entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    
    if (this.submitType === 'Save') {
      // Push client model object into client list.
    //  this.clients.push(this.regModel);
      this.clientService.createClient(this.regModel);

    } else {
      this.clientService.updateClient(this.regModel);

      // Update the existing properties values based on model.
      // this.clients[this.selectedRow].firstName = this.regModel.firstName;
      // this.clients[this.selectedRow].lastName = this.regModel.lastName;
      // this.clients[this.selectedRow].dob = this.regModel.dob;
      // this.clients[this.selectedRow].email = this.regModel.email;
      // this.clients[this.selectedRow].password = this.regModel.password;
      // this.clients[this.selectedRow].country = this.regModel.country;
    }
    // Hide client entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new client.
    this.regModel = new Client();
    // Retrieve selected client from list and assign to model.
    this.regModel = Object.assign({}, this.clients[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display client entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(client: Client) {
    debugger;
    // Delete the corresponding client entry from the list.
   // this.clients.splice(index, 1);
  this.clientService.deleteClient(client.id);

  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide client entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }

}
