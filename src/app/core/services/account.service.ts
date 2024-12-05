import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account, User } from '../../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private users: User[] = [];
  private currentUser = new BehaviorSubject<User | null>(null);

  // Observable streams for binding in components
  currentUser$ = this.currentUser.asObservable();

  constructor() {
    // Retrieve users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    // Retrieve the currentUser from localStorage if available
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) {
      this.currentUser.next(JSON.parse(storedCurrentUser));
    }
  }

  getUsers() {
    return this.users;
  }

  updateUser(user: User) {
    // Find the user in the users array
    const index = this.users.findIndex(u => u.email === user.email);
    if (index > -1) {
      // Update the user in the users array
      this.users[index] = user;
      // Save the updated users array to localStorage
      localStorage.setItem('users', JSON.stringify(this.users));
      // Update the currentUser BehaviorSubject
      this.setCurrentUser(user);
    }
  }

  setCurrentUser(user: User) {
    this.currentUser.next(user);
    // Save currentUser in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return this.currentUser.value;
  }

  login(email: string, password: string): boolean {
    // Search for the user by email and password
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  }

  register(user: User): boolean {
    // Check if the user already exists by email
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return false;
    }
    // Add the user to the users array
    this.users.push(user);
    
    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(this.users));

    // Set the current user after registration
    this.setCurrentUser(user);
    return true;
  }

  logout(): boolean {
    this.currentUser.next(null);
    localStorage.removeItem('currentUser');
    return true;
  }

}
