import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get<any>('http://localhost:3000/hits');
  }

  getFilteredRecipes(query: string, exclude: string, diet: string, health: string) {
    // event.preventDefault();
    // e4d8a3a2 9406a4fa2b489723b15b639542219839 || 733b95fc f3dc12cfcfedc94348f76ee0bdb94abe
    // console.log(`https://api.edamam.com/search?q=${query}&excluded=${exclude}&app_id=733b95fc&app_key=f3dc12cfcfedc94348f76ee0bdb94abe&from=0&to=3&diet=${diet}`);
    let queryUrl = `https://api.edamam.com/search?q=${query}${exclude}&app_id=e4d8a3a2&app_key=9406a4fa2b489723b15b639542219839&from=0&to=3${diet}${health}`;
    console.log(queryUrl);
    return this.http.get<any>(queryUrl);

  }
  getSoups() {
    return [{
      id: 1,
      label: 'Dummystring',
      image: 'favicon.ico'
    }]
    // this.http.get<any>('https://api.edamam.com/search?q=soup&app_id=733b95fc&app_key=f3dc12cfcfedc94348f76ee0bdb94abe&from=0&to=3');

  }
}
