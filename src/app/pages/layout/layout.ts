import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../service/user';
import { inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
    userSrv = inject(UserService);
    router = inject(Router);
    
    loggedoff(){
      localStorage.removeItem("parkUser");
      this.router.navigate(['/login']);
    }
}
