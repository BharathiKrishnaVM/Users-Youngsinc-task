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
  api_token:any = "ba95deae5c71ed059b6fe433430cc77d5784eed584025a8b4a24ea8a4fa7e498";
  headers = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${this.api_token}`});

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<users[]>('https://gorest.co.in/public/v2/users', {headers: this.headers});
  }
  saveData(userData):Observable<any>{
    return this.http.post('https://gorest.co.in/public/v2/users',userData, {headers: this.headers});
  }
}
