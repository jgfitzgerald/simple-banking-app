import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './features/account/account.module';
import { AuthModule } from './features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    AccountModule,
    AuthModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
