import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDfUHge6iQvtOxAdrYszPScXnnsnoEksjo",
      authDomain: "ng-recipe-book-2b1d0.firebaseapp.com"
    })
  }

}
