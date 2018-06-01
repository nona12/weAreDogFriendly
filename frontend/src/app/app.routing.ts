import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from   './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';


const appRoutes: Routes = [
    // {path:'', } 
    { path: '', component: HotelListComponent },
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'create-hotel', component: HotelAddComponent}, 
    {path: 'edit-hotel/:id', component: HotelEditComponent},
    {path: 'info', component: InfoComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login-form', component: LoginFormComponent},
    { path: '**', component: HotelListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);