import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // db = firebase.firestore();

  // constructor() {
  //   this.getRecords();
  // }

  // getRecords() {
  //   this.db.collection('heroes').onSnapshot((heroes) => {
  //     heroes.docs.forEach(element => {
  //       console.log(element.data());
  //     });
  //   });
  // }
}
