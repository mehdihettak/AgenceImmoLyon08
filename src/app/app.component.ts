import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

    // Initialize Firebase

    var firebaseConfig = {
      apiKey: "AIzaSyAUiMkWyP7GHbata_m3Oxdu7uW8yBouJ14",
      authDomain: "masuperagence-60cbe.firebaseapp.com",
      databaseURL: "https://masuperagence-60cbe.firebaseio.com",
      projectId: "masuperagence-60cbe",
      storageBucket: "",
      messagingSenderId: "735300281020",
      appId: "1:735300281020:web:4abe9c938e9897e2"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
