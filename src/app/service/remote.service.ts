import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  _url = '/api/GNews';
  constructor(
    private http: HttpClient
  ) {
   }

  getGNews() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
        headers: header
      });
  }
}
