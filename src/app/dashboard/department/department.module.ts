import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

@NgModule({
  declarations: [
  
  
    DepartmentEditComponent
  ],
   imports: [
    CommonModule,
    DepartmentRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DepartmentModule {}
