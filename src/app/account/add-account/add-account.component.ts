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
    name: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
  });

  create(): void {
    alert('Account created');
  }

  addAcount(account: Account): void {
    this.user.accounts.push(account);
    this.userChange.emit(this.user);
  }
  
}