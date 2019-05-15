import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReviewService {
  private dbUrl = "http://localhost:3000/review";

  constructor(private http: HttpClient) { }

  createReview(review): Observable<any> {

    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.post<any>(this.dbUrl + "/create", review, httpSetup);
  }

  getUserReviews(): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.get<any>(this.dbUrl + "/finduserreviews", httpSetup);
  }

  getDetailerReviews(detailerId): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.get<any>(this.dbUrl + "/finddetailerreviews/" + detailerId, httpSetup);
  }
  deleteReview(reviewId): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")

      })
    };
    return this.http.delete<any>(this.dbUrl + "/deletereview/" + reviewId, httpSetup)
  }

  deleteProfileReviews(detailerId): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")

      })
    };
    return this.http.delete<any>(this.dbUrl + "/deletereviewunderprofile/" + detailerId, httpSetup)

  }

}
