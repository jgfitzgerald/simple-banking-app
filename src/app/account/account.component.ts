import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})

export class AccountComponent {
  constructor(private router: Router, private accountService: AccountService) { }
  user = this.accountService.getCurrentUser();
}