import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  users!: User[];
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  addUser(user: User){
    return this.http.post(this.apiUrl + '/users', user);
  }

  updateUser(user: User, userId: number): Observable<any> {
    return this.http.put(this.apiUrl + '/users/' + userId, user);
  }

  deleteUser(userId: number) {
    return this.http.delete(this.apiUrl + '/users/' + userId);
  }



}
