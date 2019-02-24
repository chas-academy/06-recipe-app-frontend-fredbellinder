import { Component, OnInit, OnDestroy, OnChanges, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import { RecipesService } from 'src/app/recipes.service';
import { RecipesListsService } from '../../recipes-lists.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private recipesListsService: RecipesListsService,
  ) {
  }
  renderThisFavorites;
  fader() {
    $('#faded').toggle();
  }
  ngOnInit() {
    this.recipesListsService.getAllRecipesForCurrentUser().subscribe(data => {
      console.log(data);
      const recipes = data;
      if (Array.isArray(data)) {
        this.renderThisFavorites = recipes;
        console.log(typeof data);
      }
    });
  }

  ngOnChanges() {

  }

  removeRecipeFromList(e) {
    console.log(e, 'This Removes the recipe item');
    this.recipesListsService.deleteRecipeFromList(e);
    this.ngOnInit();
  }

  ngOnDestroy() {
  }
}
