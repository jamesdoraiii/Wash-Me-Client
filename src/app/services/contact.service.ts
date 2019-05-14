import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

    private dbUrl = "http://localhost:3000/contact";

    constructor(private http: HttpClient) { }

    createContact(contact): 
    Observable<any[]>{
        const httpSetup = {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: window.localStorage.getItem("token")
            })
          };
    
        return this.http.post<any[]>(this.dbUrl + "/create", contact, httpSetup);
    }

    findUserContacts(): Observable<any>{
        const httpSetup = {
            headers: new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: window.localStorage.getItem("token")
            })
          };
          
    return this.http.get<any>(this.dbUrl + "/findusercontacts", httpSetup);
    }

// findDetailerContacts(): Observable<any>{
//   return this.http.get<any>()
// }

}
