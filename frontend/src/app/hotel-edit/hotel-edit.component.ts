import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../models/hotel';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-hotel-edit',
  templateUrl: '../hotel-add/hotel-add.component.html',
  styleUrls: ['../hotel-add/hotel-add.component.css'],
  providers: [HotelService]
})

export class HotelEditComponent implements OnInit {
  public title: String;
  public errorMessage: String;
  public hotel: Hotel;


  constructor(private _hotelService: HotelService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Editar Hotel';

  }

  ngOnInit() {
    this.hotel = new Hotel('', '', '', '', '', '');
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
          // this.loading = false;   
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

  public onSubmit() {
    console.log(this.hotel);
    
    this._hotelService.editHotel(this.id,this.hotel).subscribe(
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
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    );
  }
}


