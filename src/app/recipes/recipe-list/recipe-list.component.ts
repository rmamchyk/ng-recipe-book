import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cream Cheese Wontons', 'Cream Cheese Wontons – yet another marriage of American and Chinese cuisines in one addictive, hilariously retro appetizer.', 
      'https://thewoksoflife.com/wp-content/uploads/2017/12/cream-cheese-wontons-7.jpg'),
    new Recipe('Sha Cha Beef Stir Fry', 'Sha Cha sauce is most often used in hot pot dipping sauces.',
      'https://thewoksoflife.com/wp-content/uploads/2018/04/sha-cha-beef-8.jpg'),
    new Recipe('Taiwanese Beef Noodle Soup', 'It’s delicious–tender beef, a rich and slightly spicy broth, fresh noodles, a little bok choy, and that absolutely necessary fistful of Chinese pickled mustard greens and fresh scallions and cilantro.',
      'https://thewoksoflife.com/wp-content/uploads/2018/03/taiwanese-beef-noodle-soup-instant-pot-9.jpg'),
    new Recipe('Pork Sung Buns', ' A traditional Pork Sung Bun is made with a milk bread base, and a thin layer of mayonnaise is spread on top. That’s what allows the pork sung (basically a mild form of shredded pork jerky) to adhere to the top of the bun.',
      'https://thewoksoflife.com/wp-content/uploads/2016/02/pork-sung-bun-3.jpg')

  ];

  constructor() { 
  }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
