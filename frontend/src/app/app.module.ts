import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MenuComponent } from './menu/menu.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    MenuComponent,
    HotelDetailComponent,
    HotelAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
