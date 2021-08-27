import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiURL: string = 'https://restcountries.eu/rest/v2' 

  constructor(private http: HttpClient) { }
 
  get httpParams() {
    return  new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population')
  }

  search_country(termino: string): Observable<any> {
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get(url, { params: this.httpParams})
  }

  search_capital(termino: string): Observable<any> {
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get(url, { params: this.httpParams})
  }

  search_region(termino: string): Observable<any> {
    const url = `${this.apiURL}/region/${termino}`
    return this.http.get(url,{ params: this.httpParams })
    // .pipe(tap(console.log))
  }
  
  get_countryByCode(termino: string): Observable<any> {
    const url = `${this.apiURL}/alpha/${termino}`
    return this.http.get(url)
  }
}
