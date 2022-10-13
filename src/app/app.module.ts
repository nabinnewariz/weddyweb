import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MarriageGuestDetailsComponent } from './marriage-guest-details/marriage-guest-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewGuestDetailsComponent } from './view-guest-details/view-guest-details.component';
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import { CustomInputBoxComponent } from './shared/custom-input-box/custom-input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarriageGuestDetailsComponent,
    RegistrationComponent,
    ViewGuestDetailsComponent,
    CustomButtonComponent,
    CustomInputBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
