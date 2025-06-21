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
    this.userSrv.loginUser(this.loginObj).subscribe(
      (res: IUserModel) => {
        alert("User Found..Navigate inside");
        localStorage.setItem("parkUser", JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        alert("Wrong Credentials..Please try again");
      }
    );
  }
}