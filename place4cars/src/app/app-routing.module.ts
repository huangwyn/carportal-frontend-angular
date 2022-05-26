import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';

const routes: Routes = [
  { path: 'cars', component: CarsListComponent },
  { path: 'addcar', component: CarFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }