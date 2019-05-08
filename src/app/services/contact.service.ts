import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

createContact(): Observable<any[]>{
  return this.http.post<any[]>(httpOptions)
}

findUserContacts(): Observable<any>{
  return this.http.get<any>()
}

findDetailerContacts(): Observable<any>{
  return this.http.get<any>()
}

}
