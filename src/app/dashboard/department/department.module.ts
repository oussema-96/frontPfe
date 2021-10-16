import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  declarations: [
  
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
