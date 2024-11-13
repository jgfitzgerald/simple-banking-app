import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    lastname: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    email: ['', [Validators.required, Validators.email]],
    accountName: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]{1,25}$')]],
    password: ['', Validators.required],
    accountType: ['', [Validators.required]],
    balance: [0.00, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
  });
 
  constructor(private fb: FormBuilder, private router: Router, private accountService: AccountService) { }

  hide : boolean = true;

  toggleShow() {
    this.hide = !this.hide;
  }

  register(): void {
    if (!this.registerForm.valid) {
      return;
    }
      if (this.accountService.register({
        id: 'uuid',
        firstname: this.registerForm.value.firstname!,
        lastname: this.registerForm.value.lastname!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        accounts: [{
          id: 'uuid',
          name: this.registerForm.value.accountName!,
          balance: this.registerForm.value.balance || 0.00,
          accountType: this.registerForm.value.accountType!,
          userId: 'uuid',
        }],
        transactions: []
      })) {
        this.router.navigate(['/home']);
      } else {
        return;
      }
    }
  }