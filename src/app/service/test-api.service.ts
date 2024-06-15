import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  private urlAPI = 'https://restcountries.com/v3.1/name/';

  constructor(private http:HttpClient) { }

  public consultapais(pais: string):Observable<any>{
    return this.http.get<any>(this.urlAPI+pais);
  }
}
