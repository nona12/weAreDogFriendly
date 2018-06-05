import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [HotelService]
 
})
export class InfoComponent implements OnInit {
  public title: String;


  constructor(private _hotelService: HotelService, ) {
   
   }

  ngOnInit() {
    this.title='Quienes Somos';
   // this._hotelService.mostrar();
 
  }


}
