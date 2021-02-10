import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get token() {
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { }

  public getToken(code: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded', Accept: '*/*'});
    const formData = new HttpParams({
      fromObject: {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:4200/login',
        'client_id': environment.clientId,
        'client_secret': environment.clientSecret
      }
    });
    return this.http.post('https://accounts.spotify.com/api/token', formData.toString(), {headers: headers});
  }
}
