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

  getRecipes(query) {
    const url = 'http://recipe.test/api/auth/recipes';

    const httpHeaders = {
      Authorization: `${localStorage.token_type} ${localStorage.RecipeAccessToken}`
    };

    this.searchResults = this.http.post<Observable<Array<object>>>(url, query, { headers: httpHeaders });
    return this.searchResults;
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
