import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_models/models';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})

export class ViewAccountComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  constructor(private router: Router) { 
    this.user = {} as User;
  }
}