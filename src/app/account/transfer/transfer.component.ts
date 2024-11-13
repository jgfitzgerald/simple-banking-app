import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Transaction, User } from '../../_models/models';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  transferForm = this.fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(1.00)]],
  });
 
  constructor(private fb: FormBuilder) {
    this.user = {} as User;
  }
  
  transfer(): void {
    if (this.transferForm.invalid) {
      return;
    }

    const transaction: Transaction = {
      fromAccountId: this.transferForm.value.from!,
      toAccountId: this.transferForm.value.to!,
      amount: this.transferForm.value.amount!,
    };

    const fromAccount = this.user.accounts.find(account => account.id === transaction.fromAccountId);
    const toAccount = this.user.accounts.find(account => account.id === transaction.toAccountId);

    if (fromAccount === toAccount) {
      return;
    }

    if (fromAccount && toAccount) {
      fromAccount.balance -= transaction.amount;
      toAccount.balance += transaction.amount;
    }

    this.user.transactions.push(transaction);
    this.userChange.emit(this.user);

  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
