import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

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
    accountName: ['', [Validators.required]],
    password: ['', Validators.required],
    accountType: ['', [Validators.required]],
    balance: ['', [Validators.required]], //TODO currency pipe
  });

  loading = false;
  submitted = false;
 
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  hide : boolean = true;

  toggleShow() {
    this.hide = !this.hide;
  }

  register(): void {
    if (this.registerForm.valid) {
      this.submitted = true;
      this.loading = true;
      this.userService.register({
        firstname: this.registerForm.value.firstname!,
        lastname: this.registerForm.value.lastname!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        accounts: [{
          name: this.registerForm.value.accountName!,
          accountType: this.registerForm.value.accountType!,
          balance: this.registerForm.value.balance as unknown as number
        }]
      });
    }
    else {
      alert('invalid form')
    }
  }
}