import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../models/Recipe';
import * as $ from 'jquery';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() onClick = new EventEmitter;
  recipes;
  renderThis;

  filterThis(e) {
    if (e) {
      this.renderThis = this.recipes.filter(data => data.recipe.healthLabels.includes(e));
      console.log(e, this.recipes, this.renderThis);
      // console.table(this.recipes.map(data => data.recipe.healthLabels), this.renderThis);
    } else {
      this.renderThis = this.recipes;
    }

  };

  constructor(private recipesService: RecipesService) {

  }

  handleSubmit = (event) => {
    let query: string = $('input[name="recipe_q"]').val();
    let exclude: string = ($('input[name="recipe_exclude"]').val() == !"" ? '&excluded=' + $('input[name="recipe_exclude"]').val() : "");
    let diet: string = ($('select.select-diet').val() == !"" ? '&diet=' + $('select.select-diet').val() : "");
    let health: string = ($('select.select-health').val() == !"" ? '&health=' + $('select.select-health').val() : "");

    this.recipesService.getFilteredRecipes(query, exclude, diet, health)
      .subscribe(data => {
        this.recipes = data.hits;
        this.renderThis = this.recipes;
        console.log(event, this.recipes);
      });
  }

  handleSoupsClick = () => {
    console.log(this.recipes, 'yolo');
    this.recipesService.getSoups();
    // .subscribe(data => {
    // });
  }
  ngOnInit() {
    // this.recipes = this.recipesService.getSoups();

  }

}
