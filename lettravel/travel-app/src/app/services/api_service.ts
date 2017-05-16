import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // Get title from the API
  getTitle() {
    return this.http.get('/api/gettitle').map(response => response.json());
  }
}
