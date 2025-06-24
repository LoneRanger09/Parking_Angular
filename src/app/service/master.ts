import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private https: HttpClient) { 

  }
  getSitesByClientId(clientId: string) {
    return this.https.get("https://api.freeprojectapi.com/api/SmartParking/GetSiteById?id=2");
  }
}
