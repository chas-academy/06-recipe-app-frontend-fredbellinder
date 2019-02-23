import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { noUndefined } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class RecipesListsService {
  constructor(private http: HttpClient) { }
  protected recipeListItemArrayOfObjects = new BehaviorSubject<any>(['default']);
  fetchedArrayOfRecipes = this.getAllRecipesForCurrentUser();
  favoritesToRender = this.recipeListItemArrayOfObjects.asObservable();
  transfer;
  // this.recipeListItemArrayOfObjects.asObservable();

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

    fetched.subscribe(data => {
      if (data !== undefined) {
        console.log(data);
        this.transfer = data,
          console.log(this.fetchedArrayOfRecipes);
      }
    });
    // this.recipeListItemArrayOfObjects.next(this.fetchedArrayOfRecipes[0].data);
    this.recipeListItemArrayOfObjects.next([
      this.transfer
    ]);


  }

  addRecipeToList(e) {
    // this.recipeListItemArrayOfObjects.next([
    //   ...this.recipeListItemArrayOfObjects.getValue(),
    //   ...[e]
    // ]);
    const url = 'http://recipe.test/api/auth/recipe-list/add';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.RecipeAccessToken
      })
    };

    const body1 = { recipe_id: e.id };
    const fetched = this.http.post<Observable<Array<object>>>(url, body1, httpOptions);

    fetched.subscribe(data => {
      if (data !== undefined) {
        console.log(data);
        this.fetchedArrayOfRecipes = data,
          console.log(this.fetchedArrayOfRecipes);
      }
    });
    // this.recipeListItemArrayOfObjects.next(this.fetchedArrayOfRecipes[0].data);
    this.recipeListItemArrayOfObjects.next([
      this.fetchedArrayOfRecipes
    ]);
  }

  deleteRecipeFromList(e) {
    // const arrayToBe = [...this.recipeListItemArrayOfObjects.getValue()];
    // const recipesNotDeleted = arrayToBe.filter(data => e !== data);
    // this.recipeListItemArrayOfObjects.next(recipesNotDeleted);
  }
}
