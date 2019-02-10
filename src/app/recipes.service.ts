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
    // e4d8a3a2 9406a4fa2b489723b15b639542219839 || 733b95fc f3dc12cfcfedc94348f76ee0bdb94abe
    let queryUrl = `https://api.edamam.com/search?q=${query}${exclude}&app_id=e4d8a3a2&app_key=9406a4fa2b489723b15b639542219839&from=0&to=3${diet}${health}`;
    return this.http.get<any>(queryUrl);

  }

  getRecipeDetails(id) {
    let param = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`
    let queryUrl = `https://api.edamam.com/search?r=${param}&app_id=e4d8a3a2&app_key=9406a4fa2b489723b15b639542219839`;
    console.log(id);
    return this.http.get<any>(queryUrl);
    // encodeURIComponent()
  }

  getSoups() {
    return [{
      id: 1,
      label: 'Dummystring',
      image: ''
    }]
    // this.http.get<any>('https://api.edamam.com/search?q=soup&app_id=733b95fc&app_key=f3dc12cfcfedc94348f76ee0bdb94abe&from=0&to=3');

  }
}
