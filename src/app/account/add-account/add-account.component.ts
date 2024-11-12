import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  constructor(private fb: FormBuilder) {}
  
  createForm = this.fb.group({
    name: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
  });

  create(): void {
    alert('Account created');
  }
  
}