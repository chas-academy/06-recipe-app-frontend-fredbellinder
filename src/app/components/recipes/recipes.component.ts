import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Recipe } from '../models/Recipe';
import * as $ from 'jquery';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: [];

  constructor(private recipesService: RecipesService) {

  }

  handleSubmit = (event) => {
    // event.preventDefault();
    let query: string = $('input[name="recipe_q"]').val();
    let exclude: string = ($('input[name="recipe_exclude"]').val() == !"" ? '&excluded=' + $('input[name="recipe_exclude"]').val() : "");
    let diet: string = ($('select.select-diet').val() == !"" ? '&diet=' + $('select.select-diet').val() : "");
    let health: string = ($('select.select-health').val() == !"" ? '&health=' + $('select.select-health').val() : "");

    this.recipesService.getFilteredRecipes(query, exclude, diet, health)
      .subscribe(data => {
        this.recipes = data.hits;
        console.log(event, data);
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
