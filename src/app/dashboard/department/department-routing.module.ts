import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { DepartmentHistoryComponent } from "./department-history/department-history.component";
import { DepartmentListComponent } from "./department-list/department-list.component";

const routes: Routes = [
  { path:'', component: DepartmentListComponent},
  { path:'add', component: DepartmentAddComponent},
  { path:'history', component: DepartmentHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DepartmentRoutingModule {}
