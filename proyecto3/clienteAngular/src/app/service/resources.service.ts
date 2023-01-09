import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ResourcesService {

  constructor(private http: HttpClient) { }

  getData() {    
    return this.http.get('https://apityj-a4901-default-rtdb.firebaseio.com/collection.json');
  }
}

