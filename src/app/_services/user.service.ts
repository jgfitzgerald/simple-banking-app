import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/models';

const usersKey = 'angular-take-home-test-users';
let users: User[] = JSON.parse(localStorage.getItem(usersKey)!) || [];

@Injectable({  providedIn: 'root' })
export class UserService {

    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        localStorage.clear();
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

  login(email: string, password: string) {
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        // Save user to local storage
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        this.router.navigate(['/account']);
    } else {
        alert('Username or password is incorrect');
    }
  }

  register(user: User) {
      // Check if user already exists
      const exists = users.find(u => u.email === user.email);
      if (exists) {
          alert('An account with this email already exists');
          return;
      }
      // Add user
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users));
      this.router.navigate(['/account']);
  }

  logout(email: string, password: string) {
    // Remove user from local storage
    // Redirect to login page
  }
}