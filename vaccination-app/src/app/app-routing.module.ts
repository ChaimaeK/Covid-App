import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {VaccinationCenterListComponent} from "./vaccination-center-list/vaccination-center-list.component";
import {BackOfficeComponent} from "./back-office/back-office.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'centers', component: VaccinationCenterListComponent},
  { path: '', redirectTo: 'centers', pathMatch: 'full'},
  { path: 'back-office', component: BackOfficeComponent, canActivate:[AuthGuard], data:{roles:['Super_Admin','Admin','Medecin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
