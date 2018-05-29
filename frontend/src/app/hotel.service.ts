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

  getHotel(id: String) {
    return this._http.get(this.url + 'hotel/' + id);
  }

  addHotel(hotel: Hotel) {
    const json = JSON.stringify(hotel);
    const params = json;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'hotel', params, { headers: headers });
  }

  editHotel(id: String, hotel: Hotel) {
    const json = JSON.stringify(hotel)
    const params = json;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.url + 'hotel/' + id, params, { headers: headers });
  }
}
