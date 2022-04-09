import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router'
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private http: HttpClient, private router : Router) {}

  getData(){
    return this.http.get('/user/viewListing')
  }

  getBooking(){
    return this.http.get('/user/viewBooking')
  }

  getListing(){
    return this.http.get('/user/search');
  }

  setToken(token : string): void{
    localStorage.setItem('token', token);
  }

  getToken():string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  customerlogin(type: any): Observable<any>{
    if (type == 'customer') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name: 'Hello', email: 'admin@gmail.com'})
    }
    if (type == 'admin') {
      this.setToken('123456');
      return of({name: 'Hello', email: 'customer@gmail.com'})
    }
    return throwError(new Error('failed to Login'));
  }
}
