import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
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
    amount: [0, [Validators.required, Validators.min(0)]],
  });
 
  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.user = {} as User;
  }
  
  transfer(): void {
    // Extract data from the form
    const transfer: Transaction = {
      fromAccountId: this.transferForm.value.from!,
      toAccountId: this.transferForm.value.to!,
      amount: this.transferForm.value.amount || 0
    };
  
    // Add the new account to the user's accounts
    this.user.transactions.push(transfer);
    console.log(this.user.transactions);
  
    // Emit the updated user
    this.userChange.emit(this.user);
    
    // Reset the form
    this.transferForm.reset();
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}