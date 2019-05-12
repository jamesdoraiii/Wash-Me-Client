import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: window.localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: "root"
})
export class DetailerService {
  private dbUrl = "http://localhost:3000/detailer";

  constructor(private http: HttpClient) {}

  createDetailerProfile(profileInfo): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.post<any>(
      this.dbUrl + "/createdetailerprofile",
      profileInfo,
      httpSetup
    );
  }

  deleteDetailerProfile(id): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.delete<any>(
      this.dbUrl + "/deletedetailerprofile/" + id,
      httpSetup
    );
  }

  discoverableOn(): Observable<any> {
    return this.http.post<any>(this.dbUrl + "/discoverableon", httpOptions);
  }

  discoverableOff(): Observable<any> {
    return this.http.post<any>(this.dbUrl + "/discoverableoff", httpOptions);
  }

  updateDetailerProfile(profileInfo): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };

    return this.http.put<any>(
      this.dbUrl + "/updateprofile",
      profileInfo,
      httpSetup
    );
  }

  searchByLocation(location): Observable<any> {
    return this.http.post<any>(
      this.dbUrl + "/searchbylocation",
      location,
      httpOptions
    );
  }

  findSpecificDetailer(id): Observable<any> {
    const httpSetup = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token")
      })
    };
    return this.http.post<any>(
      this.dbUrl + "/findspecificdetailer/" + id,
      location,
      httpSetup
    );
  }
}
