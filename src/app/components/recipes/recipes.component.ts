import {
  Component,
  OnInit,
  OnDestroy,
  Injectable
} from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Subscription } from 'rxjs';
import { RecipesListsService } from '../../recipes-lists.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  // @Output() onClick = new EventEmitter;
  constructor(
    private recipesService: RecipesService,
    private recipesListsService: RecipesListsService
  ) { }
  recipes;
  renderThis: any[];
  searchSubscription: Subscription;

  filterThis(e) {
    const filterPassingRecipes = [];
    let truth;
    if (e.length > 0) {
      this.recipes.data.forEach(recipe => {
        truth = e.every((h: any) => {
          return recipe.recipe.healthLabels.includes(h);
        });
        if (truth) { filterPassingRecipes.push(recipe); }
        console.log(truth);
      });
      this.renderThis = filterPassingRecipes;
    } else {
      this.renderThis = this.recipes.data;
    }
  }
  getSelectedOptions(input) {
    const checkBoxes = [];
    let checkBox;
    for (let i = 0, length = input.currentTarget.length; i < length; i++) {
      checkBox = input.currentTarget[i];

      if (checkBox.checked) {
        checkBoxes.push(checkBox.value);
      }
    }
    checkBoxes ? this.filterThis(checkBoxes) : this.filterThis(['']);
    console.log('checked: ', checkBoxes);
  }

  addRecipesToList(e) {
    // e = receptobjektet
    console.log(e, 'This adds a recipe to a list');
    this.recipesListsService.addRecipeToList(e);
  }

  handleSubmit = (e) => {
    const bodySearch = {
      "query": e.currentTarget[0].value
    };

    this.searchSubscription = this.recipesService
      .getRecipes(bodySearch)
      .subscribe(data => {
        console.log(data);
        this.recipes = data;
        this.renderThis = this.recipes;
      });
  }

  ngOnInit() { }
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}

