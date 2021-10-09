import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuestAddComponent } from "./guest-add/guest-add.component";
import { GuestHistoryComponent } from "./guest-history/guest-history.component";
import { GuestListComponent } from "./guest-list/guest-list.component";

const routes: Routes = [
  { path:'', component: GuestListComponent},
  { path:'add', component: GuestAddComponent},
  { path:'history', component: GuestHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class GuestRoutingModule {}
