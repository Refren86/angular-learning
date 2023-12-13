import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  handleAddToShoppingList() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  handleDeleteFromShoppingList() {
    this.shoppingListService.deleteIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  handleInputsClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';

    this.shoppingListService.clearIngredients();
  }
}
