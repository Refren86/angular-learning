import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Borgir',
      'Borgir recipe',
      'https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2020/05/22093453/montys-e1590707262192.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bun', 1)]
    ),
    new Recipe(
      'Hot dawg',
      'Hot dawg recipe',
      'https://th.bing.com/th/id/OIP.b7gaP88IQPpxPbQBVgLN-wHaF-?rs=1&pid=ImgDetMain',
      [new Ingredient('Sausage', 1), new Ingredient('Bun', 1)]
    ),
  ];

  getRecipes() {
    return structuredClone(this.recipes);
  }
}
