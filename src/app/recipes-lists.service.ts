import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesListsService {
  protected recipeListItemArrayOfObjects = new BehaviorSubject<any>([]);
  favoritesToRender = this.recipeListItemArrayOfObjects.asObservable();
  constructor() { }

  addRecipeToList(e) {
    this.recipeListItemArrayOfObjects.next([
      ...this.recipeListItemArrayOfObjects.getValue(),
      ...[e]
    ]);
  }

  deleteRecipeFromList(e) {
    const arrayToBe = [...this.recipeListItemArrayOfObjects.getValue()];
    const recipesNotDeleted = arrayToBe.filter(data => e !== data);
    this.recipeListItemArrayOfObjects.next(recipesNotDeleted);
  }
}
