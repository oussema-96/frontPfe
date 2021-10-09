import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [],
   imports: [
    CommonModule,
    GuestRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GuestModule {}
