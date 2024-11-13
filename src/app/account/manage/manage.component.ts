import { Component } from '@angular/core';
import { User } from '../../_models/models';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  activeTab: string = 'new-account'; // Default tab is 'New Account'

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  user: User = {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123', // In real applications, avoid storing passwords like this
    accounts: [
      {
        id: '1',
        name: 'John Doe - Savings',
        balance: 5000,
        accountType: 'Savings',
        userId: '1',
        transfers: [
          { fromAccountId: '1', toAccountId: '2', amount: 1000 },
          { fromAccountId: '1', toAccountId: '3', amount: 500 }
        ]
      },
      {
        id: '2',
        name: 'John Doe - Chequing',
        balance: 2000,
        accountType: 'Chequing',
        userId: '1',
        transfers: [
          { fromAccountId: '2', toAccountId: '1', amount: 1000 },
          { fromAccountId: '2', toAccountId: '3', amount: 300 }
        ]
      },
      {
        id: '3',
        name: 'John Doe - Business',
        balance: 10000,
        accountType: 'Business',
        userId: '1',
        transfers: [
          { fromAccountId: '3', toAccountId: '1', amount: 500 },
          { fromAccountId: '3', toAccountId: '2', amount: 300 },
          { fromAccountId: '3', toAccountId: '2', amount: 700 }
        ]
      }
    ]
  };

  transactions = [
    { fromAccountId: '1', toAccountId: '2', amount: 200 },
    { fromAccountId: '2', toAccountId: '1', amount: 100 },
    { fromAccountId: '3', toAccountId: '1', amount: 150 },
    { fromAccountId: '4', toAccountId: '3', amount: 300 },
    { fromAccountId: '2', toAccountId: '3', amount: 500 },
    { fromAccountId: '1', toAccountId: '4', amount: 400 },
    { fromAccountId: '3', toAccountId: '2', amount: 200 },
    { fromAccountId: '4', toAccountId: '1', amount: 350 },
    { fromAccountId: '2', toAccountId: '4', amount: 100 },
    { fromAccountId: '3', toAccountId: '1', amount: 50 },
  ];
}
