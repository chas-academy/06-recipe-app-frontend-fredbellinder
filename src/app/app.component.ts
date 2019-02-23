import { Component, Injectable } from '@angular/core';
import { RecipesService } from './recipes.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freddielicious';
  recipes: string[];
  constructor(private recipesService: RecipesService) { }


  handleRecipesClick = () => {
    console.log(this.recipes, 'yolo');
    this.recipesService.getRecipes()
      .subscribe(data => {
        console.log(data);
      });
  }
}
