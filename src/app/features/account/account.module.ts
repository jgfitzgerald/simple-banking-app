import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountComponent } from './add-account/add-account.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { TransferComponent } from './transfer/transfer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ManageComponent } from './manage/manage.component';
import { ViewAccountComponent } from './view-account/view-account.component';

@NgModule({
  declarations: [
    AddAccountComponent,
    ViewTransactionsComponent,
    TransferComponent,
    ManageComponent,
    ViewAccountComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AccountModule { }
