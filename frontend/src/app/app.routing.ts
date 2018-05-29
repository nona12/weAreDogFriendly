import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from   './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';


const appRoutes: Routes = [
    // {path:'', } 
    { path: '', component: HotelListComponent },
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'create-hotel', component: HotelAddComponent}, 
    {path: 'edit-hotel/:id', component: HotelEditComponent},
    { path: '**', component: HotelListComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);