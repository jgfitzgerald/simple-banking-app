import { Component } from '@angular/core';
import { User } from '../../_models/models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  user: User = {
    id: "user123",
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    accounts: [
      {
        id: "acc1",
        name: "Checking Account",
        balance: 1500.00,
        accountType: "Checking",
        userId: "user123"
      },
      {
        id: "acc2",
        name: "Savings Account",
        balance: 2000.00,
        accountType: "Savings",
        userId: "user123"
      },
      {
        id: "acc3",
        name: "Investment Account",
        balance: 3000.00,
        accountType: "Investment",
        userId: "user123"
      }
    ],
    transactions: [
      {
        fromAccountId: "acc1",
        toAccountId: "acc2",
        amount: 500.00
      },
      {
        fromAccountId: "acc2",
        toAccountId: "acc1",
        amount: 500.00
      },
      {
        fromAccountId: "acc2",
        toAccountId: "acc3",
        amount: 1000.00
      },
      {
        fromAccountId: "acc3",
        toAccountId: "acc2",
        amount: 1000.00
      }
    ]
  };
}
