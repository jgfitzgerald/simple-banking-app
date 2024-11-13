import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction, User } from '../../_models/models';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrl: './view-transactions.component.css'
})
export class ViewTransactionsComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  constructor() {
    this.user = {} as User;
  }

}
