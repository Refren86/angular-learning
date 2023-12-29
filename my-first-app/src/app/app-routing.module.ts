import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeDetailsResolver } from './components/recipes/recipe-details/recipe-details.resolver';

const appRoutes: Routes = [
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
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
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
