import { Component } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onAddToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteFromShoppingList(ingredient: Ingredient) {
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
  }

  onClearShoppingList() {
    this.ingredients = [];
  }
}
