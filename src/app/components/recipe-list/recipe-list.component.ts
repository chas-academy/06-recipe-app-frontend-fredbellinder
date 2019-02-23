import { Component, OnInit, OnDestroy, OnChanges, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
import { RecipesService } from 'src/app/recipes.service';
import { RecipesListsService } from '../../recipes-lists.service';
import { Subscription } from 'rxjs';
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
    private recipesService: RecipesService,
    private recipesListsService: RecipesListsService,
    private route: ActivatedRoute
  ) { }
  renderThisFavorites;
  subToThis;
  fader() {
    $('#faded').toggle();
  }
  ngOnInit() {
    // Skapa en funktion i servicen som returnerar samtliga list items för nuvarande användare.
    this.recipesListsService.getAllRecipesForCurrentUser();
    // this.recipesListsService.favoritesToRender.subscribe(data => { console.log(data), this.renderThisFavorites = data; })
    (this.renderThisFavorites = this.recipesListsService.favoritesToRender.subscribe(data => {
      if (data[0] != [undefined] && data[0] != ['default']) {
        console.log('data', data, 'renderas:', this.renderThisFavorites);
        return data[0];
      }
    }))
  }

  ngOnChanges() {
    // this.recipesListsService.favoritesToRender.subscribe(data => {
    //   this.renderThisFavorites.push(data);
    // });
  }

  removeRecipeFromList(e) {
    console.log(e, 'This Removes the recipe item');
    this.recipesListsService.deleteRecipeFromList(e);
  }

  ngOnDestroy() {
  }
}
