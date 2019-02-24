import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component'
import { RecipesService } from 'src/app/recipes.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail;
  recipeId;
  constructor(
    private recipeService: RecipesService, private recipesComponent: RecipesComponent, private activatedRoute: ActivatedRoute) {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');

    this.recipeService.getRecipeDetails(this.recipeId).subscribe(data => {

      this.recipeDetail = data.data.recipe;
      console.log(this.recipeDetail);
    }
    )
  }

  ngOnInit() {

  }
}
