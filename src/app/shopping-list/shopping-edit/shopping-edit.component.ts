import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/Ingredient';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEdition.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
        this.form.setValue({
          name: this.editedItem.name,
          amout: this.editedItem.amount
        });
      });
  }

  onSubmitItem() {
    const newIngredient = new Ingredient(this.form.value.name, this.form.value.amout);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClearItem();
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearItem();
  }

  onClearItem() {
    this.editedItemIndex = null;
    this.editMode = false;
    this.form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
