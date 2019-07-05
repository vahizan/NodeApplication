import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3001/api/v1/employees";

  getEmployees()
  {
    return this.http.get<Employee[]>(this.url);
  }
  

}
