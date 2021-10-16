import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonneAddComponent } from "./personne-add/personne-add.component";
import { PersonneHistoryComponent } from "./personne-history/personne-history.component";
import { PersonneListComponent } from "./personne-list/personne-list.component";

const routes: Routes = [
  { path: '', component: PersonneListComponent },
  { path: 'add', component: PersonneAddComponent },
  { path: 'history', component: PersonneHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PersonneRoutingModule {}
