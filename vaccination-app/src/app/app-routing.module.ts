import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {VaccinationCenterListComponent} from "./vaccination-center-list/vaccination-center-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'centers', component: VaccinationCenterListComponent},
  //{ path: '', component: VaccinationCenterListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
