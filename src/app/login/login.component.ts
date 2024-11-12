import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

// TODO username or email conditional validation

export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
 
  constructor(private fb: FormBuilder, private router: Router, private accountService: AccountService) { }

  hide : boolean = true;

  toggleShow() {
    this.hide = !this.hide;
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    } else {
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      this.accountService.login(email, password);
    }
  }
}