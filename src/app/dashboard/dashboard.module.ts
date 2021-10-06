import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideBarComponent } from '../layouts/side-bar/side-bar.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from '../layouts/header/header.component';


@NgModule({
  declarations: [SideBarComponent, HeaderComponent, DashboardComponent, UserAddComponent, UserHistoryComponent, UsersListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
