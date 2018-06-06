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
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    MenuComponent,
    HotelDetailComponent,
    HotelAddComponent,
    HotelEditComponent,
    InfoComponent,
    ContactComponent,
    LoginComponent,
    LoginFormComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
