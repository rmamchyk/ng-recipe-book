import { Ingredient } from "../shared/Ingredient";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEdition = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 10),
        new Ingredient('Apples', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}