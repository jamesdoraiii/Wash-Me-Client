import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private dbUrl = "http://localhost:3000/book"

  constructor(private http: HttpClient) { }

  signUp(signUpInfo) : Observable<any> {
    
    return this.http.post<any>(this.dbUrl+'/getbooks', signUpInfo, httpOptions);

  }

  logIn(loginInfo) : Observable<any> {

    return this.http.post<any>(this.dbUrl+'/getbooks', loginInfo, httpOptions);
    
  }

  isDetailerOn() : Observable<any> {

    return this.http.get<any>(this.dbUrl+'/getbooks');
    
  }

  isDetailerOff() : Observable<any> {

    return this.http.get<any>(this.dbUrl+'/getbooks');
    
  }
}
