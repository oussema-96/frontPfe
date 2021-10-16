import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorteAddComponent } from "./porte-add/porte-add.component";
import { PorteListComponent } from "./porte-list/porte-list.component";

const routes: Routes = [
  { path: '', component: PorteListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PorteRoutingModule {}
