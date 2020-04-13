import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModule } from 'Model/employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmpCreateService {
  API_URL='http://localhost:3000';

  constructor(private http:HttpClient) { }

  createEmployee(employees : EmployeeModule){
    return this.http.post(`${this.API_URL}/employees`,employees);
  }

  

 
}
