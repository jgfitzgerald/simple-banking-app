import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LayoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ButtonComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
