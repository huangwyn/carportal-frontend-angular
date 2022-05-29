import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarMinimal } from './car-minimal';
import { CarsList } from './cars-list'
import { Observable } from 'rxjs';

@Injectable()
export class CarService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/car';
  }

  public findAll(): Observable<CarsList> {
    return this.http.get<CarsList>(this.usersUrl);
  }

  public save(car: CarMinimal) {
    return this.http.post<CarMinimal>(this.usersUrl, car);
  }
}