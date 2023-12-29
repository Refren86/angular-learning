import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Borgir',
      'Borgir recipe',
      'https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2020/05/22093453/montys-e1590707262192.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bun', 1)]
    ),
    new Recipe(
      2,
      'Hot dawg',
      'Hot dawg recipe',
      'https://th.bing.com/th/id/OIP.b7gaP88IQPpxPbQBVgLN-wHaF-?rs=1&pid=ImgDetMain',
      [new Ingredient('Sausage', 1), new Ingredient('Bun', 1)]
    ),
  ];

  getRecipes() {
    return structuredClone(this.recipes);
  }

  getRecipe(id: number) {
    return structuredClone(this.recipes.find((recipe) => recipe.id === id));
  }
}
