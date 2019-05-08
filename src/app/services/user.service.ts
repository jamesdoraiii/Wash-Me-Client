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

  private dbUrl = "http://localhost:3000/user"

  constructor(private http: HttpClient) { }

  signUp(signUpInfo) : Observable<any> {
    return this.http.post<any>(this.dbUrl+'/createuser', signUpInfo, httpOptions);

  }

  logIn(loginInfo) : Observable<any> {

    return this.http.post<any>(this.dbUrl+'/signin', loginInfo, httpOptions);
    
  }

  isDetailerOn() : Observable<any> {

    return this.http.get<any>(this.dbUrl+'/isdetaileron');
    
  }

  isDetailerOff() : Observable<any> {

    return this.http.get<any>(this.dbUrl+'/isdetaileroff');
    
  }
}
