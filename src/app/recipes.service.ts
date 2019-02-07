import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<any>('http://localhost:3000/hits');
  }
  getSoups() {
    return this.http.get<any>('https://api.edamam.com/search?q=soup&app_id=733b95fc&app_key=f3dc12cfcfedc94348f76ee0bdb94abe&from=0&to=3');

  }
}
