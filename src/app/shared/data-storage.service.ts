import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { RecipeService } from "../recipes/recipe.service";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Recipe } from "../recipes/recipe.model";


@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get('https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json')
            .pipe(map(
                (response: Response) => {
                    const recipes = response.json();
                    for(let recipe of recipes) {
                        if (!recipe.ingredients) {
                            recipe.ingredients = [];
                        }
                    }
                    return recipes;
                }
            ))
            .pipe(catchError(error => {
                return throwError('Something went wrong');
            }))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.recipesChanged.next(recipes);
                },
                (error) => console.log(error)
            );
    }
}