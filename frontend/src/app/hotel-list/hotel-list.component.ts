import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [HotelService]
})


export class HotelListComponent implements OnInit {
  public hotels: Hotel[];
  public title: String;
  public errorMessage: String;


  constructor(
    private _hotelService: HotelService,
    private _router: Router) { }

  ngOnInit() {
    this.title = 'Listado de Hoteles';
    this._hotelService.getHotels().subscribe(
      result => {
        console.log('OK:' + result);
        this.hotels = result['data'];
        if (!this.hotels) {
          alert('error en el servidor');
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    )


  }

  deleteHotel(id: String) {
    this._hotelService.deleteHotel(id).subscribe(
      result => {
        this._router.navigate(['/'])
        this._hotelService.getHotels();
      }, error => {
        alert('Error al intentar borrar el hotel')
      }
    )
  }



}
