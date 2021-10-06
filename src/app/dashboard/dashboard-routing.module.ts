import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserHistoryComponent } from "./user-history/user-history.component";
import { UsersListComponent } from "./users-list/users-list.component";


const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'user-add', component: UserAddComponent },
    { path:'user-history', component: UserHistoryComponent },
    { path:'users-list', component: UsersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
