import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        ul li a {
            cursor: pointer;
        }
    `]
})
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;

    constructor(private store: Store<fromApp.AppState>) {}
    
    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onLogout() {
        this.store.dispatch(new AuthActions.TryLogout());
    }

    onSaveData() {
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }

    onFetchData() {
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }
}