import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./auth/auth.guard";
import {CenterListService} from "./services/center-list.service";
import { BackOfficeComponent } from './back-office/back-office.component';
import {MatTabsModule} from "@angular/material/tabs";
import { CenterDetailsComponent } from './center-details/center-details.component';
import {MatIconModule} from "@angular/material/icon";
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatTableModule} from "@angular/material/table";
import { PlanningComponent } from './planning/planning.component';
import { MyVaccinationCenterComponent } from './my-vaccination-center/my-vaccination-center.component';
import { SuperAdminConfigComponent } from './super-admin-config/super-admin-config.component';
import { QueueComponent } from './queue/queue.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { SearchFilterPipe } from './search-filter.pipe';
import {MatTooltipModule} from "@angular/material/tooltip";
import { UserModalComponent } from './user-modal/user-modal.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    ReservationComponent,
    LoginComponent,
    ForbiddenComponent,
    HeaderComponent,
    BackOfficeComponent,
    CenterDetailsComponent,
    UserDetailsComponent,
    PlanningComponent,
    MyVaccinationCenterComponent,
    SuperAdminConfigComponent,
    QueueComponent,
    SearchFilterPipe,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    Ng2SearchPipeModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService, CenterListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
