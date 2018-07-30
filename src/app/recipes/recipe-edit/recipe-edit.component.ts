import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeName: string;
  recipeDescription: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{;
      if (params['id']) {
        let id = +params['id'];
        this.recipe = this.recipeService.getRecipe(id);
        this.recipeName = this.recipe.name;
        this.recipeDescription = this.recipe.description;
      } else {
        this.recipeName = '';
        this.recipeDescription = '';
      }
    })
  }

}
