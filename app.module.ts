import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({

  
  declarations: [
    AppComponent,
    EmpListComponent,
    CreateEmpComponent,
    EditEmpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
