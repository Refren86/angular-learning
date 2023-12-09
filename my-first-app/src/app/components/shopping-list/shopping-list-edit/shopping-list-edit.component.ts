import {
  Component,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @Output() addToShoppingListEvent = new EventEmitter<Ingredient>();
  @Output() deleteFromShoppingListEvent = new EventEmitter<Ingredient>();
  @Output() clearShoppingListEvent = new EventEmitter<void>();

  @ViewChild('nameInput', { static: true })
  nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  handleAddToShoppingList() {
    this.addToShoppingListEvent.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  handleDeleteFromShoppingList() {
    this.deleteFromShoppingListEvent.emit(
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

    this.clearShoppingListEvent.emit();
  }
}
