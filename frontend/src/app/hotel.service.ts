import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  getHotels() {

    return [
      {
        _id: '1',
        name: 'Ritch',
        type: 'hotel',
        direccion: 'Gran via 259',
        phone: '934225489',
        city:'Barcelona'

      }, {
        _id: '2',
        name: 'Pazo dos escudos',
        type: 'hotel',
        direccion: 'Av balaidos 36',
        phone: '986355245',
        city:'Vigo'
      }, {
        _id: '1',
        name: 'Caravela Pinta',
        type: 'hotel',
        direccion: 'Elduayen 16',
        phone: '986300218',
        city:'Baiona'
      }];
  }
}
