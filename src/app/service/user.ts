import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private https: HttpClient) { }
  loginUser(obj: any) :Observable<IUserModel> {
    return this.https.post<IUserModel>('https://api.freeprojectapi.com/api/SmartParking/login', obj);
  }
}
