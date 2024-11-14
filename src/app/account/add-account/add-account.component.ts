import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account, User } from '../../_models/models';
import { generateAccountId } from '../../_helpers/utils';

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

  submitted = false;
  
  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    balance: [0.00, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
    accountType: ['', [Validators.required]],
  });

  create(): void {
    // Ensure the form is valid before proceeding
    if (this.createForm.invalid) {
      this.submitted = true;
      alert('Error creating account.');
      return; // Do not proceed if form is invalid
    }

    // Extract data from the form
    const account: Account = {
      id: generateAccountId(),
      name: this.createForm.value.name!,
      balance: this.createForm.value.balance || 0.00,
      accountType: this.createForm.value.accountType!,
    };

    // Add the new account to the user's accounts
    this.user.accounts.push(account);
    console.log(this.user.accounts);

    // Emit the updated user
    this.userChange.emit(this.user);

    // Reset the form
    this.createForm.reset();
  }
}