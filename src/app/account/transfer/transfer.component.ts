import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/models';

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
    amount: [0, [Validators.required, Validators.min(0)]],
  });

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
  });
 
  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.user = {} as User;
  }
  
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
      this.accountService.createAccount({ id: this.generateId(), name, balance, accountType, userId: 'uuid' });
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