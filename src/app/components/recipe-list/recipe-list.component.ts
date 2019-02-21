import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import { RecipesService } from 'src/app/recipes.service';
import { RecipesListsService } from '../../recipes-lists.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(
    private recipesService: RecipesService,
    private recipesListsService: RecipesListsService,
    private route: ActivatedRoute
  ) { }
  renderThisFavorites = [];
  subscription: Subscription;
  fader() {
    $('#faded').toggle();
  }
  ngOnInit() {
    this.subscription = this.route.data.subscribe(v => {
      return console.log(v.title);
    });
    this.recipesListsService.favoritesToRender.subscribe(data => {
      this.renderThisFavorites.push(data);
    });
  }

  removeRecipeFromList(e) {
    console.log(e, 'This Removes the recipe item');
    this.recipesListsService.deleteRecipeFromList(e);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
