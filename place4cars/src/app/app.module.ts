import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarService } from './car-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    CarsListComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
