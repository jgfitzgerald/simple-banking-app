import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction, User } from '../../_models/models';
import { generateTransactionId } from '../../_helpers/utils';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
 
  submitted = false;

  transferForm = this.fb.group(
    {
      from: ['', Validators.required],
      to: ['', Validators.required],
      amount: [1, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
    }
  );

  constructor(private fb: FormBuilder) {
    this.user = {} as User;
  }

  transfer(): void {
    if (this.transferForm.invalid) {
      this.submitted = true;
      alert("Error transferring funds.");
      return;
    }

    const transaction: Transaction = {
      id: generateTransactionId(),
      fromAccountId: this.transferForm.value.from!,
      toAccountId: this.transferForm.value.to!,
      amount: this.transferForm.value.amount!,
    };

    const fromAccount = this.user.accounts.find(account => account.id === transaction.fromAccountId);
    const toAccount = this.user.accounts.find(account => account.id === transaction.toAccountId);

    if (fromAccount && toAccount && fromAccount.balance >= transaction.amount) {
      fromAccount.balance -= transaction.amount;
      toAccount.balance += transaction.amount;

      // Add the transaction
      this.user.transactions.push(transaction);

      // Emit the updated user data
      this.userChange.emit(this.user);
    }
  }

  sameAccounts(): boolean {
    return this.transferForm.value.from === this.transferForm.value.to;
  }

  insufficientFunds(): boolean {
    const fromAccount = this.user.accounts.find(account => account.id === this.transferForm.value.from);
    const amount = this.transferForm.value.amount ?? 0;
    return (fromAccount?.balance ?? 0) < amount;
  }
}
