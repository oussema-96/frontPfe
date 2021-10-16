import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { DepartmentListComponent } from "./department-list/department-list.component";

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path:'add', component: DepartmentAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DepartmentRoutingModule {}
