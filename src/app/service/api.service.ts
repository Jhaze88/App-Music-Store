import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }
  getTracks(artist): Observable<any>{
    return this.http.get(
      `https://itunes.apple.com/search?term=${artist}&media=music&limit=5`
    )
  }

}//class
