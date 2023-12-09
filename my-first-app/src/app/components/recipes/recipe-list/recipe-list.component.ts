import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }
}
