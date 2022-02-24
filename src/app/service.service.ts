import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: any ={};
  url= "https://swapi.dev/api/people/?page=2";

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(this.url);
  }
}
