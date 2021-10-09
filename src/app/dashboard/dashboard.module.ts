import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideBarComponent } from '../layouts/side-bar/side-bar.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { GuestAddComponent } from './guest/guest-add/guest-add.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { PersonneListComponent } from './personne/personne-list/personne-list.component';
import { PersonneAddComponent } from './personne/personne-add/personne-add.component';
import { PersonneHistoryComponent } from './personne/personne-history/personne-history.component';
import { PorteAddComponent } from './porte/porte-add/porte-add.component';
import { PorteListComponent } from './porte/porte-list/porte-list.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BlackListComponent } from './black-list/black-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [SideBarComponent, DashboardComponent, DepartmentAddComponent, DepartmentListComponent, GuestAddComponent, GuestListComponent, PersonneListComponent, PersonneAddComponent, PersonneHistoryComponent, PorteAddComponent, PorteListComponent, BlackListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class DashboardModule {}
