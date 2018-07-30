import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}