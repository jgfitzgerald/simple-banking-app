import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account, Transaction, User } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private users: User[] = [];
  private currentUser = new BehaviorSubject<User | null>(null);
  private accounts = new BehaviorSubject<Account[]>([]);

  // Observable streams for binding in components
  currentUser$ = this.currentUser.asObservable();
  accounts$ = this.accounts.asObservable();

  constructor() {}

  getUsers() {
    return this.users;
  }

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  getCurrentUser() {
    return this.currentUser.value;
  }

  createAccount(account: Account) {
    const accounts = this.accounts.getValue();
    accounts.push(account);
    this.accounts.next(accounts); // Notify subscribers of the update
  }

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.setCurrentUser(user);
    } else {
      alert('Username or password is incorrect');
    }
  }

  register(user: User) {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      alert('An account with this email already exists');
      return;
    }
    this.users.push(user);
    this.setCurrentUser(user);
  }

  transferFunds(transaction: Transaction): { success: boolean; message: string } {
    const accounts = this.accounts.getValue();
    const fromAccount = accounts.find(acc => acc.id === transaction.fromAccountId);
    const toAccount = accounts.find(acc => acc.id === transaction.toAccountId);

    if (!fromAccount) return { success: false, message: 'Source account not found' };
    if (!toAccount) return { success: false, message: 'Destination account not found' };

    if (fromAccount.balance < transaction.amount) {
      return { success: false, message: 'Insufficient funds' };
    }

    fromAccount.balance -= transaction.amount;
    toAccount.balance += transaction.amount;

    this.accounts.next(accounts); // Notify subscribers of the balance update
    return { success: true, message: 'Transfer successful' };
  }
}
