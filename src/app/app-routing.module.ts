import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component';                     
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { AllForexTypeComponent } from './components/all-forex-type/all-forex-type.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { UpdateForexCardTypeComponent } from './components/update-forex-card-type/update-forex-card-type.component';
import { AddForexTypeComponent } from './components/add-forex-type/add-forex-type.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AllComplaintsComponent } from './components/all-complaints/all-complaints.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'adminhome',component: AdminHomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admins', component: AllAdminsComponent},
  {path: 'forextypes', component: AllForexTypeComponent},
  {path: 'complaints', component: AllComplaintsComponent},
  {path: 'forextype', component: AddForexTypeComponent},
  {path: 'admin', component: AddAdminComponent},
  {path: 'forextype/:id', component: UpdateForexCardTypeComponent},
  {path:'navadmin',component:NavAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
