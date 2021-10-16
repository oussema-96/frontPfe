import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PorteRoutingModule } from './porte-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PorteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PorteModule {}
