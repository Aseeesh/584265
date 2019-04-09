import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import  * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from './client.model';

@Injectable()
export class ClientService {


  constructor(private firestore: AngularFirestore) {

  }
  ClientsDb = this.firestore.collection('clients');

  getClients() {
    return this.ClientsDb.snapshotChanges();
  }

  createClient(client: Client){
    debugger
    var city: any;
      city = Object.assign({}, {
        firstName :client.firstName,
        lastName:client.lastName,
        email:client.email,
        password:client.password,
        country:client.country,
        dob:client.dob,
      });
     return this.firestore.firestore.collection("clients").add(city)
    // this.firestore.firestore.collection('clients').add(client);
  }
  updateClient(client: Client){
    debugger;
    const userRef = this.firestore.firestore.collection('clients').doc(client.id);
    userRef.set(client, {merge: true});
    // this.deleteClient(client.id) ;
    // this.firestore.doc('clients/' + client.id).update(client);
  }

  deleteClient(clientId: string){
    debugger;
    this.firestore.doc('clients/' + clientId).delete();
  }
}
