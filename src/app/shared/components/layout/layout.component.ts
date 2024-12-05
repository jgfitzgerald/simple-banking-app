import { Component } from '@angular/core';
import { User } from '../../models/models';
import { AccountService } from '../../../core/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router, private accountService: AccountService) { }
  
  user = this.accountService.getCurrentUser() || {} as User;

  logout(): void {
    if (this.accountService.logout()) {
      this.router.navigate(['/login']);
    } else {
      return;
    }
    
  }
}
