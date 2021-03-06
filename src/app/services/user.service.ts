import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURL } from '../../environments/environment.prod'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private dbUrl = `${APIURL}/user`

  constructor(private http: HttpClient) { }

  signUp(signUpInfo): Observable<any> {

    console.log('reacting service')

    return this.http.post<any>(this.dbUrl + '/createuser', signUpInfo, httpOptions);

  }

  logIn(loginInfo): Observable<any> {

    return this.http.post<any>(this.dbUrl + '/signin', loginInfo, httpOptions);

  }

  isDetailerOn(userid): Observable<any> {
    console.log("this is in the service", userid)

    console.log(this.dbUrl + '/isdetaileron/' + userid)
    return this.http.get<any>(this.dbUrl + '/isdetaileron/' + userid);

  }

  isDetailerOff(userid): Observable<any> {

    return this.http.get<any>(this.dbUrl + '/isdetaileroff/' + userid);

  }
}
