import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../hotel.service'; 

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [HotelService]
})


export class HotelListComponent implements OnInit {
  public hotels: Hotel[];

  constructor(private _hotelService: HotelService) { }

  ngOnInit() {
    this.hotels = this._hotelService.getHotels();
  }

}
