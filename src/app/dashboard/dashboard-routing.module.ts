import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";


const routes: Routes = [
    { path:'', component: DashboardComponent},
    { path:'guest', loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule) },
    { path:'porte', loadChildren: () => import('./porte/porte.module').then(m => m.PorteModule) },
    { path:'personne', loadChildren: () => import('./personne/personne.module').then(m => m.PersonneModule) },
    { path:'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
