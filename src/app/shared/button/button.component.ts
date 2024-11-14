// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() accountType?: string;  // Allow optional accountType

  get buttonClass(): string {
    if (this.accountType === 'chequings') {
      return 'btn btn-chequings';
    } else if (this.accountType === 'savings') {
      return 'btn btn-savings';
    }
    return 'btn btn-primary';  // Default styling
  }
}
