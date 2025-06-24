import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseModel } from '../model/user.model';
import { UserService } from './user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'https://api.freeprojectapi.com/api/SmartParking/';
  private userSrv = inject(UserService);

  constructor(private https: HttpClient) {}

  getSitesByClientId(): Observable<ResponseModel> {
    const clientId = this.userSrv.loggedUserdata?.extraId;
    
    if (!clientId) {
      return throwError(() => new Error('Client ID not found in user data.'));
    }
    return this.https.get<ResponseModel>(`${this.apiUrl}GetSiteById?id=${clientId}`).pipe(
      map(res => {
        if (!res || !res.result) throw new Error(res?.message || 'Failed to fetch sites');
        return res;
      }),
      catchError(err => {
        console.error('Error fetching sites:', err);
        return throwError(() => err);
      })
    );
  }

  getBuildingBySiteId(siteId: number): Observable<ResponseModel> {
    if (!siteId) {
      return throwError(() => new Error('Site ID is required.'));
    }
    return this.https.get<ResponseModel>(`${this.apiUrl}GetBuildingBySiteId?id=${siteId}`).pipe(
      map(res => {
        if (!res || !res.result) throw new Error(res?.message || 'Failed to fetch buildings');
        return res;
      }),
      catchError(err => {
        console.error('Error fetching buildings:', err);
        return throwError(() => err);
      })
    );
  }

  getFloorsByBuildingId(buildingId: number): Observable<ResponseModel> {
    if (!buildingId) {
      return throwError(() => new Error('Building ID is required.'));
    }
    return this.https.get<ResponseModel>(`${this.apiUrl}GetFloorsByBuildingId?id=${buildingId}`).pipe(
      map(res => {
        if (!res || !res.result) throw new Error(res?.message || 'Failed to fetch floors');
        return res;
      }),
      catchError(err => {
        console.error('Error fetching floors:', err);
        return throwError(() => err);
      })
    );
  }
}