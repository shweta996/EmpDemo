import { Component, OnInit } from '@angular/core';
import { EmpCreateService } from './emp-create.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeModule } from 'Model/employee/employee.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
  //employee : EmployeeModule[];
  createForm: FormGroup;
  submitted = false;
 // message = false ;
   
  employee: EmployeeModule = new EmployeeModule();

  constructor(private formBuilder: FormBuilder, private _createEmpService: EmpCreateService, private router: Router,private toast :ToastrService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      // id:new FormControl(this.employee.id),        
      name: ['',Validators.required, Validators.pattern("[a-zA-Z ]*")],
      city:  ['',Validators.required],
      gender: ['select',Validators.required],
      dob : ['',Validators.required],
      department:['',Validators.required],
      email: ['',Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
    });

    
  }

  get f() { return this.createForm.controls; }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new EmployeeModule();
  }

  save() {
    this._createEmpService.createEmployee(this.createForm.value)
      .subscribe(data => console.log(data),
        error => this.toast.error(error));
    this.employee = new EmployeeModule();
   
  
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.invalid) {
      return this.toast.error("invalid form");
    }
    this.save();
    
   console.log('SUCCESS!! \n\n' + JSON.stringify(this.createForm.value));
   this.toast.success('successfully added..!!','SUCCESS');
   
  }

  

}


