import { HttpClient, HttpClientModule, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 interface users{
   name: string,
   email: string,
   gender: string,
   status: string
 }

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api_token:any = "7b7741eece4f83c0e036d13bd318d483f066427909fe2536365dadcee4a0e480";
  headers = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
    'Authorization': `${this.api_token}`});

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<users[]>('https://gorest.co.in/public/v2/users', {headers: this.headers});
  }
  saveData(userData):Observable<any>{
    return this.http.post('https://gorest.co.in/public/v2/users',userData, {headers: this.headers});
  }
}
