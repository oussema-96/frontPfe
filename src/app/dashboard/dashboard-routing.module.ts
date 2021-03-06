import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { BlackListComponent } from "./black-list/black-list.component";
import { HistoryComponent } from "./history/history.component";
import { AuthGuardService } from "../guards/auth-guard.service";
import { HomePageComponent } from "./home-page/home-page.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'guest', loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule) },
      { path: 'porte', loadChildren: () => import('./porte/porte.module').then(m => m.PorteModule) },
      { path: 'personne', loadChildren: () => import('./personne/personne.module').then(m => m.PersonneModule) },
      { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
      { path: 'history', component:HistoryComponent },
      { path: 'blackList', component:BlackListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
