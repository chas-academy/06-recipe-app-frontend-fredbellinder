import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnDestroy
} from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../models/Recipe';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { RecipesListsService } from '../../recipes-lists.service';
import { forEach } from '@angular/router/src/utils/collection';

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
      this.recipes.forEach(recipe => {
        truth = e.every((h: any) => {
          return recipe.recipe.healthLabels.includes(h);
        });
        if (truth) { filterPassingRecipes.push(recipe); }
        console.log(truth);
      });
      this.renderThis = filterPassingRecipes;
    } else {
      this.renderThis = this.recipes;
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
    console.log(e, 'This adds a recipe to a list');
    this.recipesListsService.addRecipeToList(e);
  }

  handleSubmit = () => {
    const query: string = $('input[name="recipe_q"]').val();
    const exclude: string =
      $('input[name="recipe_exclude"]').val() != null
        ? '&excluded=' + $('input[name="recipe_exclude"]').val()
        : '';
    const diet: string =
      $('select.select-diet').val() !== ''
        ? '&diet=' + $('select.select-diet').val()
        : '';
    const health: string =
      $('select.select-health').val() !== ''
        ? '&health=' + $('select.select-health').val()
        : '';

    this.searchSubscription = this.recipesService
      .getFilteredRecipes(query, exclude, diet, health)
      .subscribe(data => {
        this.recipes = data.hits;
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
