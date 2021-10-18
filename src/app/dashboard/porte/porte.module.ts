import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule  } from '@angular/forms';
import { PorteRoutingModule } from './porte-routing.module';
import { PorteEditComponent } from './porte-edit/porte-edit.component';

@NgModule({
  declarations: [
    PorteEditComponent
  ],
  imports: [
    CommonModule,
    PorteRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
})
export class PorteModule {}
