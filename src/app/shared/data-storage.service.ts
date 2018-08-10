import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    fetchRecipes() {
        const token = this.authService.getToken();
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json?auth=' + token)
            .pipe(map(
                (recipes) => {
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
                (recipes) => {
                    this.recipeService.recipesChanged.next(recipes);
                },
                (error) => console.log(error)
            );
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes());
    }


}