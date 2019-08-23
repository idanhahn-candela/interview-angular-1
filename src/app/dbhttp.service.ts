import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DBHttpService {


  // API
  // Request - https://candela-fe-interview.firebaseio.com/part1/customerName.json'
  // Response - customer name

  constructor(private http: HttpClient) { }


  // Question 2:
  // -----------
}
