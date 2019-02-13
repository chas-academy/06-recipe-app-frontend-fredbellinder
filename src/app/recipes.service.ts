import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiHemlisar } from './api-hemlisar';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient, private apiHemlisar: ApiHemlisar) { }

  getRecipes() {
    return this.http.get<any>('http://localhost:3000/hits');
  }


  getFilteredRecipes(query: string, exclude: string, diet: string, health: string) {
    let queryUrl = `https://api.edamam.com/search?q=${query}${exclude}&app_id=${this.apiHemlisar._app_id}&app_key=${this.apiHemlisar._app_key}&from=0&to=10${diet}${health}`;
    return this.http.get<any>(queryUrl);

  }

  getRecipeDetails(id) {
    let param = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`
    let queryUrl = `https://api.edamam.com/search?r=${param}&app_id=${this.apiHemlisar._app_id}&app_key=${this.apiHemlisar._app_key}`;
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
