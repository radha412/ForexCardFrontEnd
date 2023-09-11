import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavAdminComponent,
    AllAdminsComponent,
    AllForexTypeComponent,
    AddAdminComponent,
    UpdateForexCardTypeComponent,
    AddForexTypeComponent,
    AdminHomeComponent,
    AllComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
