import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListEmpService {
  API_URL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getEmployees()
  {
    return this.http.get(`${this.API_URL}/employees`);
  }

  
  deleteEmployee(id:number)
  {
      return this.http.delete(`${this.API_URL}/employees/${id}`);
  }
}
