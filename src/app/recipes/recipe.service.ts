import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/Ingredient";
import { Subject } from "rxjs";

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Cream Cheese Wontons', 'Cream Cheese Wontons – yet another marriage of American and Chinese cuisines in one addictive, hilariously retro appetizer.',
            'https://thewoksoflife.com/wp-content/uploads/2017/12/cream-cheese-wontons-7.jpg', 
            [
                new Ingredient('Cheese (pounds)', 2),
                new Ingredient('Sugar (teaspoons)', 2),
                new Ingredient('Salt (teaspoons)', 0.5),
                new Ingredient('Scallions', 4),
                new Ingredient('Wonton wrappers (packs)', 1),
                new Ingredient('Soy sauce (tablespoons)', 1),
                new Ingredient('Water (tablepoons)', 1),
                new Ingredient('Honey (teaspoons)', 1)
            ]),
        new Recipe('Sha Cha Beef Stir Fry', 'Sha Cha sauce is most often used in hot pot dipping sauces.',
            'https://thewoksoflife.com/wp-content/uploads/2018/04/sha-cha-beef-8.jpg',
            [
                new Ingredient('Beef (pounds)', 1),
                new Ingredient('Soy sauce (teaspoons)', 1), 
                new Ingredient('Cornstarch (teaspoons)', 2),
                new Ingredient('Oil (tablespoons)', 2),
                new Ingredient('Ginger', 2),
                new Ingredient('Garlic', 3),
                new Ingredient('Sha Cha sauce (tablespoons)', 2),
                new Ingredient('Sugar (teaspoons)', 2),
                new Ingredient('Scallions', 5)
            ]),
        new Recipe('Taiwanese Beef Noodle Soup', 'It’s delicious–tender beef, a rich and slightly spicy broth, fresh noodles, a little bok choy, and that absolutely necessary fistful of Chinese pickled mustard greens and fresh scallions and cilantro.',
            'https://thewoksoflife.com/wp-content/uploads/2018/03/taiwanese-beef-noodle-soup-instant-pot-9.jpg', 
            [
               new Ingredient('Beef (pounds)', 3),
               new Ingredient('Oil (tablespoons)', 2),
               new Ingredient('Ginger', 2),
               new Ingredient('Garlic', 3),
               new Ingredient('Scallions', 3),
               new Ingredient('Onion', 1),
               new Ingredient('Tomato', 1),
               new Ingredient('Dried chilies', 4),
               new Ingredient('Tomato paste (tablespoons)', 1),
               new Ingredient('Bean paste (tablespoons)', 2),
               new Ingredient('Sugar (teaspoons)', 2),
               new Ingredient('Soy sauce (cups)', 2),
               new Ingredient('Black pepper (teaspoons)', 0.25),
               new Ingredient('Spice powder (teaspoons)', 0.25),
               new Ingredient('Noodles (packs)', 1)
            ]),
        new Recipe('Pork Sung Buns', 'A traditional Pork Sung Bun is made with a milk bread base, and a thin layer of mayonnaise is spread on top. That’s what allows the pork sung (basically a mild form of shredded pork jerky) to adhere to the top of the bun.',
            'https://thewoksoflife.com/wp-content/uploads/2016/02/pork-sung-bun-3.jpg',
            [
                new Ingredient('Milk (cups)', 1),
                new Ingredient('Eggs', 1),
                new Ingredient('Sugar (cups)', 0.25),
                new Ingredient('Flour (cups)', 0.5),
                new Ingredient('Dry yeast (tablespoons)', 1),
                new Ingredient('Salt (tablespoons)', 1.5),
                new Ingredient('Mayonnaise (cups)', 0.25),
                new Ingredient('Pork (packs)', 1),
                new Ingredient('Scallions', 3)
            ]),
        new Recipe('Whole Wheat Mantou', '“Fluffy” and “chewy” are how I like to describe these Whole Wheat Mantou. These are almost always the two words that come to mind when I come across really, really good mantou (Chinese steamed buns).',
            'https://thewoksoflife.com/wp-content/uploads/2018/01/whole-wheat-mantou-9.jpg',
            [
                new Ingredient('Milk (cups)', 1.5),
                new Ingredient('Dry yeast (teaspoons)', 1),
                new Ingredient('Sugar (tablespoons)', 1),
                new Ingredient('Flour (cups)', 2.75)
            ]),
        new Recipe('The Classic Burger', 'Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.',
            'https://previews.123rf.com/images/rvlsoft/rvlsoft1211/rvlsoft121100009/16138750-big-hamburger-on-white-background.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Eggs', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Ketchup', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Mayonnaise', 1),
                new Ingredient('Bread crumbs', 25),
                new Ingredient('Сabbage', 2)
            ]),
        new Recipe('Hot dog', 'A hot dog(also spelled hotdog), also known as a frankfurter(sometimes shortened to frank), dog, or wiener, is a cooked sausage, traditionally grilled or steamed and served in a partially sliced bun. It is a type of sausage sandwich.',
            'http://runsickcattle.com/data/out/73/720168.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Sausages', 1),
                new Ingredient('Mustard', 1),
                new Ingredient('Ketchup', 1)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}