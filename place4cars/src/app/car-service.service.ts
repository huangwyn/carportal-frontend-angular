import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarMinimal } from './car-minimal';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/car';
  }

  public findAll(): Observable<CarMinimal[]> {
    return this.http.get<CarMinimal[]>(this.usersUrl);
  }

  public save(car: CarMinimal) {
    return this.http.post<CarMinimal>(this.usersUrl, car);
  }
}