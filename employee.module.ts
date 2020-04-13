import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { 
  id: number;
  name: string;
  city: string;
  gender: string;
  dob : Date;
  department: string;
  email : String;

}
