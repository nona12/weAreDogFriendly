import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HotelService } from '../services/hotel.service'
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css'],
  providers: [HotelService]
})
export class HotelAddComponent implements OnInit {

  public title: String;
  public errorMessage: String;
  public hotel: Hotel;
  provincias: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria',
    'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'IslasBaleares', 'Jaén',
    'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia',
    'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']


  constructor(private _hotelService: HotelService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Añadir nuevo hotel';
  }

  ngOnInit() {
    this.hotel = new Hotel('', '', '', '', '', '', '', '', '', '', '', '', 0);
    console.log(this.hotel);

  }

  onSubmit() {
    this._hotelService.addHotel(this.hotel).subscribe(
      response => {

        if (!response['hotel']) {
          alert('Error en el servidor');
        } else {
          this.hotel = response['hotel'];
          this._router.navigate(['/hotel, this.hotel._id']);
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          alert('Error en la peticion');
        }
      }
    );
  }


}
