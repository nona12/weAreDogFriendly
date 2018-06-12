import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVDODJm_9z7VZAuHvWT1lLbkyJhIDLh9s',
      authDomain: 'wearedogfriendly.firebaseapp.com'
    });
  }
}



