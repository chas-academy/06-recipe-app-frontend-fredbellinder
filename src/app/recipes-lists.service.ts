import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { noUndefined } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class RecipesListsService {
  constructor(private http: HttpClient) { }
  getAllRecipesForCurrentUser() {
    const url = 'http://recipe.test/api/auth/recipe-list';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.RecipeAccessToken
      })
    };

    const fetched = this.http.get<Observable<Array<object>>>(url, httpOptions);

    return fetched;
  }

  addRecipeToList(e) {
    const url = 'http://recipe.test/api/auth/recipe-list/add';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.RecipeAccessToken
      })
    };

    const body1 = { recipe_id: e };
    const addRequest = this.http.post(url, body1, httpOptions);
    addRequest.subscribe();
  }

  deleteRecipeFromList(e) {
    const url = `http://recipe.test/api/auth/recipe-list/${e}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.RecipeAccessToken
      })
    };
    const addRequest = this.http.delete(url, httpOptions);
    addRequest.subscribe();
  }
}
