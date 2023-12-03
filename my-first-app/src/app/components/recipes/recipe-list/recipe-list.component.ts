import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYOdJeTDbHuDZnrLNN7roYsuX_DlWdrHv-A&usqp=CAU'
    ),
    new Recipe(
      'Test recipe',
      'Simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYOdJeTDbHuDZnrLNN7roYsuX_DlWdrHv-A&usqp=CAU'
    ),
  ];
}
