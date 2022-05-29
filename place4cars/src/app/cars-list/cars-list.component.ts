import { Component, OnInit } from '@angular/core';
import { CarMinimal } from '../car-minimal';
import { CarService } from '../car-service.service';
import { CarsList } from '../cars-list'

@Component({
  selector: 'app-car-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars!: CarMinimal[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.cars = data.cars;
      console.log(this.cars);
    });
  }
}