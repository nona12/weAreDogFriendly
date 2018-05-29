import { Injectable } from '@angular/core';
import { Response } from '@angular/http'; 
import { HttpClient } from '@angular/common/http'; 
import { HttpHeaders } from '@angular/common/http';
import { Hotel } from './models/Hotel'; 
import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})


export class HotelService {
  public url: String;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:3678/api/';
   }
  getHotels() {

    return this._http.get(this.url + 'hotels')
 
  }
}
