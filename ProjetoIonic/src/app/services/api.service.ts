import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlPadrao: String = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {

  }

  createData() {

  }

  readData(): Observable<iRetornoPosts[]> {
    return this.http.get<iRetornoPosts[]>(this.urlPadrao + 'posts');
  }

  updateData() {

  }

  deleteData() {

  }
}

interface iRetornoPosts {
  userId: number,
  id: number,
  title: String,
  body: String
}