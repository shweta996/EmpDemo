import { Component, OnInit } from '@angular/core';
import { EmployeeModule } from 'Model/employee/employee.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditService } from './edit.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  employee: EmployeeModule;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private _editEmpService : EditService, private toast :ToastrService) { }
  
  ngOnInit() {
  // let empId = localStorage.getItem("editempId");
  // if(!empId) {
  //   alert("Invalid action.")
  //   this.router.navigate(['list']);
  //   return;
  // }
  this.editForm = this.formBuilder.group({
    id: [],
    name: ['',Validators.required],
    city: ['',Validators.required],
    gender: ['', Validators.required],
    dob:['',Validators.required],
    department: ['', Validators.required],
    email: ['', Validators.required],
    
  });
  // this._editEmpService.getEmployeeById(+empId)
  //   .subscribe( data => {
  //   this.editForm.setValue(data);
  //   });


  let empid = localStorage.getItem('editEmpId');  
    if (+empid > 0) {  
      this._editEmpService.getEmployeeById(+empid).subscribe(data => {  
        this.editForm.patchValue(data);  
      })  
      
    }  
  }
  
  onUpdate() {  
    console.log('Update data');  
    this._editEmpService.updateEmployee(this.editForm.value).subscribe(data => {  
      this.router.navigate(['list']);
      this.toast.success('update record successfully..!!','SUCCESS');  
      console.log('update record successfully..!! \n\n' + JSON.stringify(this.editForm.value));
    },  
      error => {  
        this.toast.error(error);  
      });  
  }  

}
