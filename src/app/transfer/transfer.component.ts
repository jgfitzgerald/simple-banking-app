import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  transferForm = this.fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    balance: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
  });
 
  constructor(private fb: FormBuilder) { }

  transfer(): void {
    if (this.transferForm.valid) {
      alert('invalid form')
    }
    else {
      alert('invalid form')
    }
  }

  create(): void {
    if (this.createForm.valid) {
      alert('invalid form')
    }
    else {
      alert('invalid form')
    }
  }
}
