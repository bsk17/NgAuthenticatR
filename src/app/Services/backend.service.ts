import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private userStore = [
    {username: 'bob', password: '123'},
    {username: 'bill', password: '123'},
    {username: 'tom', password: '123'},
    {username: 'jerry', password: '123'}
  ];

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const body = {username, password};

    for(let i =0; i < this.userStore.length; i++){
      if (this.userStore[i].username === username && this.userStore[i].password === password){
        return this.http.post<{ token: string}>('http://demo7016800.mockable.io/login', body);
      }
    }
    return this.http.post<{ token: string}>('http://demo7016800.mockable.io/loginError', body);
  }
}
