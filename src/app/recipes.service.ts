import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiHemlisar } from './api-hemlisar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient, private apiHemlisar: ApiHemlisar) { }

  getRecipes() {
    return this.http.get<any>('http://localhost:3000/hits');
  }

  getFilteredRecipes(
    query: string,
    exclude: string,
    diet: string,
    health: string
  ) {
    const queryUrl = `https://api.edamam.com/search?q=${query}${exclude}&app_id=${
      this.apiHemlisar._app_id
      }&app_key=${this.apiHemlisar._app_key}&from=0&to=10${diet}${health}`;
    return this.http.get<Observable<Array<object>>>(queryUrl);
  }

  getRecipeDetails(id) {
    const param = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}`;
    const queryUrl = `https://api.edamam.com/search?r=${param}&app_id=${
      this.apiHemlisar._app_id
      }&app_key=${this.apiHemlisar._app_key}`;
    console.log(id);
    return this.http.get<Observable<Array<object>>>(queryUrl);
    // encodeURIComponent()
  }
}
