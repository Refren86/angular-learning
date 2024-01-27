import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListFormRef', { static: false }) shoppingListForm: NgForm;

  editListItemSubscription: Subscription;
  updateIngredientSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editListItemSubscription =
      this.shoppingListService.startedEditing.subscribe(
        (ingredientIndex: number) => {
          this.editMode = true;
          this.editedItemIndex = ingredientIndex;

          const ingredient =
            this.shoppingListService.getIngredient(ingredientIndex);

          this.editedItem = ingredient;

          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      );
  }

  ngOnDestroy(): void {
    this.editListItemSubscription.unsubscribe();
  }

  handleFormSubmit(form: NgForm) {
    const { value } = form;

    if (!this.editMode) {
      this.shoppingListService.addIngredient(
        new Ingredient(value.name, value.amount)
      );
    } else {
      this.shoppingListService.updateIngredient({
        ...value,
        index: this.editedItemIndex,
      });

      this.editMode = false;
    }

    this.shoppingListForm.reset();
  }

  handleDeleteFromShoppingList() {
    this.shoppingListService.deleteIngredient(
      new Ingredient(
        this.shoppingListForm.value.name,
        this.shoppingListForm.value.amount
      )
    );

    this.shoppingListForm.reset();
  }

  handleInputsClear() {
    this.shoppingListForm.reset();

    this.shoppingListService.clearIngredients();
  }
}
