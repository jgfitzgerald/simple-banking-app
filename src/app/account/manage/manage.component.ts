import { Component } from '@angular/core';
import { User } from '../../_models/models';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  activeTab: string = 'new-account'; // Default tab is 'New Account'

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  constructor(private accountService: AccountService) { }

  user = this.accountService.getCurrentUser() || {} as User;

  onUserChange(updatedUser: User) {
    this.accountService.updateUser(updatedUser);
  }
  
}
