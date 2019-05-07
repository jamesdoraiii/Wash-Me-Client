import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from 'angular/common/http';
//import { Review } from '../models/review.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }


createReview(Review): Observable<any>{
  return this.http.post<any[]>()
}

getReview(): Observable<any[]>{
  return this.http.get<any[]>(review, httpOptions)
}




}
