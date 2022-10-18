import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { CarsList } from './cars-list'
import { Observable } from 'rxjs';

@Injectable()
export class CarService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://34.237.142.190:9000/api/v1/truck';
  }

  public findAll(): Observable<CarsList> {
    return this.http.get<CarsList>(this.usersUrl);
  }

  public save(car: Car) {
    return this.http.post<Car>(this.usersUrl, car);
  }
}
