import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import  * as firebase from 'firebase'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from './project.model';

@Injectable() 
// export class ProjectService {

//   ref = firebase.firestore().collection('projects');

//   constructor() { }

//   // getProjects(): Observable<any> {
//   //   return new Observable((observer) => {
//   //     this.ref.onSnapshot((querySnapshot) => {
//   //       let projects = [];
//   //       querySnapshot.forEach((doc) => {
//   //         let data = doc.data();
//   //         projects.push({
//   //           key: doc.id,
//   //           title: data.title,
//   //           description: data.description,
//   //           author: data.author
//   //         });
//   //       });
//   //       observer.next(projects);
//   //     });
//   //   });
//   // }

//   // getProject(id: string): Observable<any> {
//   //   return new Observable((observer) => {
//   //     this.ref.doc(id).get().then((doc) => {
//   //       let data = doc.data();
//   //       observer.next({
//   //         key: doc.id,
//   //         title: data.title,
//   //         description: data.description,
//   //         author: data.author
//   //       });
//   //     });
//   //   });
//   // }

//   // postProjects(data): Observable<any> {
//   //   return new Observable((observer) => {
//   //     this.ref.add(data).then((doc) => {
//   //       observer.next({
//   //         key: doc.id,
//   //       });
//   //     });
//   //   });
//   // }

//   // updateProject(data): Observable<any> {
//   //   return new Observable((observer) => {
//   //     this.ref.doc(data.id).set(data).then(() => {
//   //       observer.next();
//   //     });
//   //   });
//   // }

//   // deleteProject(id: string): Observable<{}> {
//   //   return new Observable((observer) => {
//   //     this.ref.doc(id).delete().then(() => {
//   //       observer.next();
//   //     });
//   //   });
//   // }
// }

export class ProjectService {


  constructor(private firestore: AngularFirestore) { 
    
  }
  ProjectsDb = this.firestore.collection('projects');

  getProjects() {
    return this.ProjectsDb.snapshotChanges();
  }
  
  createProject(project: Project){
    debugger
    var obj: any;
    obj = Object.assign({}, { 
        name :project.name,
        description:project.description,
        clientId:project.clientId, 
      });
     return this.firestore.firestore.collection("projects").add(obj)
    // this.firestore.firestore.collection('projects').add(project);
  }
  updateProject(project: Project){
    debugger;
    const userRef = this.firestore.firestore.collection('projects').doc(project.id);
    userRef.set(project, {merge: true});
    // this.deleteproject(project.id) ;
    // this.firestore.doc('projects/' + project.id).update(project);
  }

  deleteProject(projectId: string){
    debugger;
    this.firestore.doc('projects/' + projectId).delete();
  }
}