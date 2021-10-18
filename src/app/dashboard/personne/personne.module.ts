import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PersonneRoutingModule } from './personne-routing.module';
import { PersonneEditComponent } from './personne-edit/personne-edit.component';

@NgModule({
  declarations: [
    PersonneEditComponent
  ],
   imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PersonneModule {}
