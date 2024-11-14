import { Component, Input } from '@angular/core';
import { User } from '../../_models/models';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrl: './view-transactions.component.css',
})
export class ViewTransactionsComponent {
  @Input() user: User;
  selectedAccountId: string = '';
  searchQuery: string = '';

  constructor() {
    this.user = {} as User;
  }

  getAccountName(accountId: string): string {
    const account = this.user.accounts.find(account => account.id === accountId);
    return account ? account.name : 'null';
  }

  filterTransactions() {
    if (!this.user || !this.user.transactions) {
      return [];
    }

    // Convert searchQuery to lowercase for case-insensitive search
    const searchLower = (this.searchQuery || '').toLowerCase();

    return this.user.transactions.filter(transaction => {
      // Filter by account selection (either 'from' or 'to' account)
      const isAccountSelected = this.selectedAccountId
        ? transaction.fromAccountId === this.selectedAccountId || transaction.toAccountId === this.selectedAccountId
        : true; // If no account is selected, don't filter by account

      // Safely get account names using optional chaining
      const fromAccountName = this.getAccountName(transaction.fromAccountId) || '';
      const toAccountName = this.getAccountName(transaction.toAccountId) || '';

      // Return transactions that match both the account selection and search query
      return (
        isAccountSelected &&
        (
          (transaction.id?.toLowerCase() || '').includes(searchLower) ||
          fromAccountName.toLowerCase().includes(searchLower) ||
          toAccountName.toLowerCase().includes(searchLower)
        )
      );
    });
  }
}
