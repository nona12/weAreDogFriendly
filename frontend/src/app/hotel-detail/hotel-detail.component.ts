import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HotelService } from '../hotel.service';
import { Hotel } from '../models/hotel';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
  providers: [HotelService]

})
export class HotelDetailComponent implements OnInit {
  public title: String;
  public errorMessage: String;
  public hotel: Hotel;
  

  constructor(private _hotelService: HotelService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getHotel();
   
  }
  getHotel() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      console.log('OK hotel id:' + id);
      this._hotelService.getHotel(id).subscribe(
        response => {
          this.hotel = response['data'];
          console.log('hotel:' + this.hotel);
          if (!this.hotel) {
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        }
      );
    });
  }



}
