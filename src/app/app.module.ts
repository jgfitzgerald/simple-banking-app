import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './account/account.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyPipe,
    HttpClientModule,
    AccountModule 
  ],
  providers: [
    [CurrencyPipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
