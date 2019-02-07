import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';


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
    this.recipesService.getRecipes()
      .subscribe(data => {
        console.log(data);
      });
  }
  handleSoupsClick = () => {
    this.recipesService.getSoups()
      .subscribe(data => {
        this.recipes = data.hits;
        console.log(this.recipes);
      });
  }
}
