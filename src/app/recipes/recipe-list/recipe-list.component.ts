import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cream Cheese Wontons', 'Cream Cheese Wontons – yet another marriage of American and Chinese cuisines in one addictive, hilariously retro appetizer.', 
      'https://thewoksoflife.com/wp-content/uploads/2017/12/cream-cheese-wontons-7.jpg'),
    new Recipe('Sha Cha Beef Stir Fry', 'Sha Cha sauce is most often used in hot pot dipping sauces.',
      'https://thewoksoflife.com/wp-content/uploads/2018/04/sha-cha-beef-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
