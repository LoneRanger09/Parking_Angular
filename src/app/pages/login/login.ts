import { Component, inject } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IUserModel } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {
  userSrv = inject(UserService);
  router = inject(Router);
  loginObj: User = { 
    emailId: '', 
    password: '' 
  };

  onLogin() {
    // Check if email and password are provided
    this.userSrv.loginUser(this.loginObj).subscribe(
      (res: IUserModel) => {
        alert("User Found..Navigate inside");
        // Store user data in localStorage for persistence
        localStorage.setItem("parkUser", JSON.stringify(res));
        // Store user data in the service for later use
        this.userSrv.loggedUserdata = res;
        // Navigate to the dashboard after successful login 
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        alert("Wrong Credentials..Please try again");
      }
    );
  }
}