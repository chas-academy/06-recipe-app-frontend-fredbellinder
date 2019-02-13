import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as $ from "jquery";
import { RecipesService } from "src/app/recipes.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}
  subscription: Subscription;
  fader() {
    $("#faded").toggle();
  }
  ngOnInit() {
    this.subscription = this.route.data.subscribe(v => console.log(v.title));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
