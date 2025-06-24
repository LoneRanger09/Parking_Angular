import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserdata! : IUserModel;


  constructor(private https: HttpClient) { 
    const loggeddata = localStorage.getItem("parkUser");
    if(loggeddata !== null) {
      this.loggedUserdata = JSON.parse(loggeddata as string);
    }
  }
  loginUser(obj: any) :Observable<IUserModel> {
    return this.https.post<IUserModel>('https://api.freeprojectapi.com/api/SmartParking/login', obj);

    
  }
}
