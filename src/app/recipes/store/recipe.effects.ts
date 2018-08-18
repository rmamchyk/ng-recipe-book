import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map, switchMap, withLatestFrom } from "rxjs/operators";

import * as RecipeActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromRecipe from './recipe.reducers';

@Injectable()
export class RecipeEffects {
    constructor(private actions$: Actions, 
        private httpClient: HttpClient,
        private store: Store<fromRecipe.FeatureState>) {}

    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .pipe(
            switchMap((action: RecipeActions.FetchRecipes) => {
                return this.httpClient.get<Recipe[]>('https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json');
            }),
            map((recipes: Recipe[]) => {
                for(let recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            })
        );

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .pipe(
            withLatestFrom(this.store.select('recipes')),
            switchMap(([action, state]) => {
                const req = new HttpRequest('PUT', 
                'https://ng-recipe-book-2b1d0.firebaseio.com/recipes.json',
                state.recipes);
                return this.httpClient.request(req);
            })
        );

}