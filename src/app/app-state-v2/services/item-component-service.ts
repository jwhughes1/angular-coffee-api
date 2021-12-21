import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoffee } from '../interfaces/coffee.interface';

@Injectable({
    providedIn: 'root'
  })
  export class CoffeeService {
    constructor (private http: HttpClient) {}
  
    //We are going to create an array with 50 elements and store them in here, returning the array
    public getCoffeeData(): Observable<ICoffee[]> 
    {
      return this.http.get<ICoffee[]>("https://random-data-api.com/api/coffee/random_coffee");
    }
  }