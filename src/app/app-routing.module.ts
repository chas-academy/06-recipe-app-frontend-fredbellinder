import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { NoSuchUrlComponent } from "./components/no-such-url/no-such-url.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";

const routes: Routes = [
  { path: "semlor", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipe-detail/:id", component: RecipeDetailComponent },
  {
    path: "recipe-list",
    component: RecipeListComponent,
    data: { title: "This be da title" }
  },
  { path: "**", component: NoSuchUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
