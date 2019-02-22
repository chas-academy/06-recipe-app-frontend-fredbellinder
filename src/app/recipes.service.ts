import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiHemlisar } from './api-hemlisar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient, private apiHemlisar: ApiHemlisar) { }

  searchResults;
  detailResult;

  getRecipes() {
    const url = 'http://recipe.test/api/auth/recipes';

    const httpHeaders = {

      Authorization: `${localStorage.token_type} ${localStorage.RecipeAccessToken}`
    };
    const fetchData = {
      method: 'GET',
      headers: httpHeaders
    };

    // fetch(url, fetchData)
    //   .then((res) => { res.json() })
    //   .then((response) => {
    //     return response;
    //   })
    // .catch ((error) => console.error(error));

    this.searchResults = this.http.get<Observable<Array<object>>>(url, { headers: httpHeaders });
    return this.searchResults;
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
    const url = `http://recipe.test/api/auth/recipes/${id}`;

    const httpHeaders = {

      Authorization: `${localStorage.token_type} ${localStorage.RecipeAccessToken}`
    };
    const fetchData = {
      method: 'GET',
      headers: httpHeaders
    };
    this.detailResult = this.http.get<Observable<Array<object>>>(url, { headers: httpHeaders });
    return this.detailResult;
  }
}
