import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account, User } from '../../_models/models';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.user = {} as User;
  }
  
  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]{1,25}$')]],
    balance: ['', [Validators.required, Validators.pattern('/^\d+(\.\d{1,2})?$/')]],
    accountType: ['', [Validators.required]],
  });

  create(): void {
    // Extract data from the form
    const account: Account = {
      id: this.generateUniqueId(), // Add a unique ID generation logic if necessary
      name: this.createForm.value.name!,
      balance: parseFloat(this.createForm.value.balance || '0'), // Convert balance to number
      accountType: this.createForm.value.accountType!,
      userId: this.user.id, // Assuming you want to link the account to the current user
    };
  
    // Add the new account to the user's accounts
    this.user.accounts.push(account);
    console.log(this.user.accounts);
  
    // Emit the updated user
    this.userChange.emit(this.user);
    
    // Reset the form
    this.createForm.reset();
  }
  
  generateUniqueId(): string {
    return 'acc-' + Math.random().toString(36).substr(2, 9);
  }

}