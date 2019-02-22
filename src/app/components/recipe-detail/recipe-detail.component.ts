import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component'
import { RecipesService } from 'src/app/recipes.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe_detail;
  recipe_id;
  constructor(
    private recipeService: RecipesService, private recipesComponent: RecipesComponent, private activatedRoute: ActivatedRoute) {
    this.recipe_id = this.activatedRoute.snapshot.paramMap.get('id');

    this.recipeService.getRecipeDetails(this.recipe_id).subscribe(data => {
      debugger;
      this.recipe_detail = data.recipe;
    }
    )
  }

  ngOnInit() {

  }
}
