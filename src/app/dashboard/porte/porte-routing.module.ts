import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorteAddComponent } from "./porte-add/porte-add.component";
import { PorteHistoryComponent } from "./porte-history/porte-history.component";
import { PorteListComponent } from "./porte-list/porte-list.component";

const routes: Routes = [
  { path:'', component: PorteListComponent},
  { path:'add', component: PorteAddComponent},
  { path:'history', component: PorteHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PorteRoutingModule {}
