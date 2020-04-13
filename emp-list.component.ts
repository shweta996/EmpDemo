import { Component, OnInit } from '@angular/core';
import { ListEmpService } from './list-emp.service';
import { EmployeeModule } from 'Model/employee/employee.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
    
  employees: EmployeeModule[];
  totalRec : number;
  page: number = 1;
  constructor(private _empService : ListEmpService,private router : Router,private toast : ToastrService) { }

  ngOnInit() 
  {
    this.getEmployees();

  }

 public getEmployees(){
    this._empService.getEmployees().subscribe((data : EmployeeModule[])=>
    {
      this.employees = data;
      console.log(data);
      this.totalRec = this.employees.length;
      console.log(this.totalRec);
      console.log(this.page);
    });

  }
  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.toast.success('record deleted..!!','SUCCESS')
          this.getEmployees();
        },
        error => this.toast.error(error));
  }
 
  editEmployee(employee: EmployeeModule): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id.toString());  
    this.router.navigate(['edit']);  
  }  
  
}


