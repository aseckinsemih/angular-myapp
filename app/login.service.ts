import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoginResponse } from './Types/login-response.type';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  login ( name: string , password: string){
    return this.httpClient.post<LoginResponse>("/login",{name, password}).pipe(
      tap((value)=> {

      localStorage.setItem("auth-token", value.token)
      localStorage.setItem("username", value.name)
      })
    )
  
   }
}
 