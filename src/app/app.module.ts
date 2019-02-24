import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { HomeComponent } from "./components/home/home.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { NoSuchUrlComponent } from "./components/no-such-url/no-such-url.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    RecipeDetailComponent,
    NoSuchUrlComponent,
    RecipeListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [RecipesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
