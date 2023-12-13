import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Simply a test 1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYOdJeTDbHuDZnrLNN7roYsuX_DlWdrHv-A&usqp=CAU'
    ),
    new Recipe(
      'Test recipe 2',
      'Simply a test 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYOdJeTDbHuDZnrLNN7roYsuX_DlWdrHv-A&usqp=CAU'
    ),
  ];

  getRecipes() {
    return structuredClone(this.recipes);
  }

}