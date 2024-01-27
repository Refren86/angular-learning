import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return structuredClone(this.ingredients);
  }

  getIngredient(index: number) {
    return structuredClone(this.ingredients[index]);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(structuredClone(this.ingredients));
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient) => {
    //   this.ingredients.push(ingredient);
    // });
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(structuredClone(this.ingredients));
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.reduce((acc, ing) => {
      if (ing.name.toLowerCase() === ingredient.name.toLowerCase()) {
        if (ingredient.amount < ing.amount) {
          acc.push({ ...ing, amount: ing.amount - ingredient.amount });
        } else if (ingredient.amount >= ing.amount) {
          return acc;
        }
      } else {
        acc.push(ing);
      }

      return acc;
    }, []);

    this.ingredientsChanged.next(structuredClone(this.ingredients));
  }

  updateIngredient(updatedIngredientData: Ingredient & { index: number }) {
    const { index, ...updatedIngredient } = updatedIngredientData;
    this.ingredients[index] = updatedIngredient;

    this.ingredientsChanged.next(structuredClone(this.ingredients));
  }

  clearIngredients() {
    this.ingredients = [];

    this.ingredientsChanged.next(structuredClone(this.ingredients));
  }
}
