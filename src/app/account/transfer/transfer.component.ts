import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/models';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  transferForm = this.fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(0)]],
  });

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
  });

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
 
  constructor(private fb: FormBuilder, private accountService: AccountService) { }
  
  transfer(): void {
    if (this.transferForm.valid) {
      const from = this.transferForm.get('from')?.value ?? '';
      const to = this.transferForm.get('to')?.value ?? '';
      const amount = this.transferForm.get('amount')?.value ?? 0;
      this.accountService.transferFunds({ fromAccountId: from, toAccountId: to, amount });
      alert('Transfer successful!');
      this.transferForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }

  create(): void {
    if (this.createForm.valid) {
      const name = this.transferForm.get('name')?.value ?? '';
      const balance = this.transferForm.get('balance')?.value ?? 0;
      const accountType = this.transferForm.get('accountType')?.value ?? '';
      this.accountService.createAccount({ id: this.generateId(), name, balance, accountType, userId: 'uuid', transfers: [] });
      alert('Account created successfully!');
      this.createForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}