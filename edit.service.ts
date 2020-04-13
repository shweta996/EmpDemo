import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModule } from 'Model/employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  API_URL='http://localhost:3000';

  constructor(private http: HttpClient) { }

  
  updateEmployee(employees: EmployeeModule) {
    return this.http.put(`${this.API_URL}/employees`+ '/' + employees.id, employees);
  }

  getEmployeeById(id: number) {  
    return this.http.get(`${this.API_URL}/employees` + '/' + id);  
  } 
}
