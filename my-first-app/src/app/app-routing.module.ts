import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeDetailsResolver } from './components/recipes/recipe-details/recipe-details.resolver';
import { RecipePlaceholderComponent } from './components/recipes/recipe-placeholder/recipe-placeholder.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipePlaceholderComponent,
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
        resolve: { recipe: RecipeDetailsResolver },
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
